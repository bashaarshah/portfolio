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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png",
        title: "Ford Motor Company",
        jobTitle: "Software Engineer",
        description: "..."

    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png",
        title: "Ford Motor Company",
        jobTitle: "Software Engineer",
        description: "..."

    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png",
        title: "Ford Motor Company",
        jobTitle: "Software Engineer",
        description: "..."

    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png",
        title: "Ford Motor Company",
        jobTitle: "Software Engineer",
        description: "..."

    }
]
