

export const NavLinks = [
    { path: "/", key: "Home", text: "Home" },
    { path: "/portfolio", key: "Portfolio", text: "Portfolio" },
    { path: "/cv", key: "cv", text: "cv" },
    { path: "/about", key: "About", text: "About" },
    { isAdmin: false, path: "/admin", key: "Admin", text: "Admin" },
]

export const Dropdownlink = [
   { title: "Hub",
    links: [
        'Blog',
        'Movies',
        'Music',
        'Tutorial',
    ]

    }

]






 
// function ActiveLink( href: string) {
//     const router = useRouter()
//     const style = {
//       marginRight: 10,
//       color: router.asPath === href ? 'link' : 'link.hover',
//     }
   
//     const handleClick = (e: { preventDefault: () => void; }) => {
//       e.preventDefault()
//       router.push(href)
//     }
//     }



//                         {/* <Link href="/" className={header ? "link" : "link"}>Home</Link>
//                     <Link href="/portfolio" className={header ? "link" : "link"}>Portfolio</Link>
//                     <Link href="/cv" className={header ? "link" : "link"}>Cv</Link>
//                     <Link href="/about" className={header ? "link" : "link"}>About</Link>
//                     <Link href="/admin" className={header ? "link" : "link"}>Admin</Link>
//                     <Link href="/profile" className={header ? "link" : "link"}>Profile</Link>