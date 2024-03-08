const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex-center min-h-screen bg-cover w-full bg-primary-50 bg-fixed bg-dotted-pattern bg-center">
            {children}
        </div>
    )
}
export default Layout;