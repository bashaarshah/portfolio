import Redirect from "./components/Redirect"
import Work from "./pages/Work"


// schema:
// [page => [label, location, (jsx component || url) ] ]
export const pages = [
    { label: "Work", location: "/", component: <Work /> },
    { label: "About", location: "about", component: <div /> },
    { label: "Resume", location: "resume", component: <Redirect href={"https://google.com"}/> }
]

export const work = [
    {
        image: "https://cdn.dribbble.com/users/469697/screenshots/6449432/ford_white_4x.jpg",
        title: "Ford Motor Company",
        jobTitle: "Full Stack Software Engineer",
        description: "Currently developing and deploying new features everyday for fordpro.com. Managed and Provisioned Subscription Services for Ford vehicles all around the world. ADD TECHSTACK WITH DROPDOWN"

    },
    {
        image: "http://ww1.prweb.com/prfiles/2017/03/08/14257260/doxim-logo.jpg",
        title: "Doxim",
        jobTitle: "Junior Programming Developer",
        description: "..."

    },
    {
        image: "https://mma.prnewswire.com/media/1830002/Comerica_Logo.jpg?p=facebook",
        title: "Comerica",
        jobTitle: "Software Engineering and Automation Engineer",
        description: "..."

    }
]
