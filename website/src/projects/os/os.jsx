import styles from "./os.module.css";
import header from "../../assets/projects/os/header.png"

import { SimpleHeader, ProjectDescription } from "../../atomics/projects.jsx";

function OS(){
    const tags = ["C", "Makefiles"];
    const year = "2024";

    return (
        <>
            <SimpleHeader title="OPERATING SYSTEMS ASSIGNMENTS" src={header}/>
            <div className={styles.pageContent}>
                <ProjectDescription tags={tags} date={year} location="COMPLETED AT CONSTRUCTOR UNIVERISTY BREMEN">
                    <p>
                    <br></br>
                    In my second year at Constructor University I completed the Operating systems course, that included many assignments.
                    A significant ammount of them involved programming in <b>C</b> and using <b>Makefiles</b>. The course and assignments focused on 
                    <b>synchronization, multithreading, using multiple processes</b> and exploring the <b>inner workings of operating systems</b>.

                    <br></br><br></br>
                    Also, the course explored the UNIX POSIX standard APIs in theory and practice. 
                    </p>
                </ProjectDescription>
                {/** these are all my assignments */}
                <div className={styles.assignmentsList}>
                    <h3 className="inv">ASSIGNMENTS</h3>
                    <Assignment 
                    title="Assignment 1: library, sytem calls and environment variables"
                    repoLink="https://github.com/TPdkr/OS-homework-1">
                        <p>
                            The assignment has 3 tasks. It focuses on understanding the basics of library and system calls as well as their error codes.
                            I was also asked to reimplement some of the functionality of env command. 
                        </p>
                    </Assignment>
                    <Assignment 
                    title="Assignment 2: executing programs with a constructed arguments list"
                    repoLink="https://github.com/TPdkr/OS-homework-1">
                        <p>
                            The assignment has only 1 tasks. The problem asks to reimplement some functionality of the <b>xargs</b> UNIX utility.
                        </p>
                    </Assignment>
                    <Assignment 
                    title="Assignment 3: threads in C"
                    repoLink="https://github.com/TPdkr/OS-hw-3-threads-in-C">
                        <p>
                            The single task here asks the student to implement a program that finds perfect numbers and utilize multiple threads in C for faster execution.
                        </p>
                    </Assignment>
                    <Assignment 
                    title="Assignment 4: multithreading and exclusive locks"
                    repoLink="https://github.com/TPdkr/OS-hw4-multithreading-and-exclusive-locks">
                        <p>
                            The 100 prisoners problem is stated by Philippe Flajolet and Robert Sedgewick is the base for this problem.
                            It asks to implement it in C and provide 2 versions. One with exclusive lock for all drawers, one with separate locks for each one.
                        </p>
                    </Assignment>
                    <Assignment 
                    title="Assignment 5: multithreading and exclusive locks"
                    repoLink="https://github.com/TPdkr/OS-hw5-POSIX-cond-var-and-mutexes">
                        <p>
                            The goal is to simulate a "vending machine" using several functions and syncgronize the parts. 
                            The solution in C using POSIX mutexes and condition variables and no other syn-chronization primitives
                        </p>
                    </Assignment>
                    {/** intermission why assignments are not mentioned */}
                    <div>
                        
                        <h4 className={styles.intermission}>Assignment 6-7 did not have a coding part and thus not uploaded to GitHub</h4>
                       
                    </div>
                    {/** list continues */}
                    <Assignment 
                    title="Assignment 8: Address spaces, paging and memory mapping"
                    repoLink="https://github.com/TPdkr/OS-hw8-paging-and-memory-mapping">
                        <p>
                            The assignment focused on understanding paging through practice. And the coding section asked to implement standard UNIX <b>mwc</b> utility using
                            memory mapping.
                        </p>
                    </Assignment>
                    <Assignment 
                    title="Assignment 9: pipes and exec in C"
                    repoLink="https://github.com/TPdkr/OS-hw9-pipes-and-exec-in-C">
                        <p>
                            The problem is about creating a simple quiz game. The program fetches data from an API and asks the user for answer. 
                            The parts use pipes for communication.
                        </p>
                    </Assignment>
                    <Assignment 
                    title="Assignment 10: communication with sockets"
                    repoLink="https://github.com/TPdkr/OS-hw10-communication-in-C-with-sockets">
                        <p>
                            The task is to use IPv4 sockets to communicate and create a word guessing game with a client and a server.
                        </p>
                    </Assignment>
                   
                </div>
            </div>
                
        </>
    );
}

function Assignment({title, repoLink, children}){
    return (
        <div className={styles.assignment}>
            <h4>
                {title}
            </h4>
            {children}
            <a href={repoLink} target="_blank">GitHub repository</a>
        </div>
    );
}

export default OS