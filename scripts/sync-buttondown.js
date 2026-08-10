import fs from "fs";
import path from "path";

const API_KEY = process.env.BUTTONDOWN_API_KEY;
const OUT_DIR = path.join(process.cwd(), "src/website/content/newsletters");

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  let url = "https://api.buttondown.com/v1/emails?status=sent&ordering=-publish_date";
  const emails = [];

  // paginate through all sent emails
  while (url) {
    const res = await fetch(url, {
      headers: { Authorization: `Token ${API_KEY}` },
    });
    if (!res.ok) throw new Error(`Buttondown API error: ${res.status}`);
    const data = await res.json();
    emails.push(...data.results);
    url = data.next;
  }

  for (const email of emails) {
    const slug = email.slug || email.id;
    const filePath = path.join(OUT_DIR, `${slug}.md`);

    const frontmatter = [
      "---",
      `title: ${JSON.stringify(email.subject)}`,
      `date: ${email.publish_date}`,
      `slug: ${slug}`,
      `buttondown_id: ${email.id}`,
      "---",
      "",
    ].join("\n");

    fs.writeFileSync(filePath, frontmatter + (email.body || ""));
  }

  console.log(`Synced ${emails.length} newsletter issues.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});