
const LoadingScreen = () => {
    return (
        <>
            <div className="h-screen w-full top-0 left-0 fixed z-[1000] bg-background overflow-hidden flex flex-col items-center justify-center">
                <div className="h-14 w-14 rounded-full border-[0.25rem] border-border border-t-primary animate-spin" style={{ transformOrigin: 'center' }} />
            </div>
        </>
    )
}

export default LoadingScreen