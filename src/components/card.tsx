const Card = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="p-24 m-3 shadow-md border border-slate-600 flex justify-center items-center">
            {children}
        </div>
    )
}

export default Card