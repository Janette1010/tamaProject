import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
    return (<nav className="nav">
        <img src="/imgs/Tsubutchi.PNG.webp" alt="logo"></img>
        <Link to="/" className="site-title"> Tama Island</Link>
        <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="./Products" >Products</CustomLink>
            <CustomLink to="./Form" >Contact</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}