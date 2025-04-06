import "./Header.scss"

const Header = ({children, className}) => {
    return (
        <h1 className={`custom-header ${className}`}>{children}</h1>
    )
}

export default Header