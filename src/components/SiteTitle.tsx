interface siteTitleProps{
    title : string;
    color? : string;
}

const SiteTitle = ({title, color} : siteTitleProps) => {
    const style = color? {color} : {};
    return(
        <div className="container-title">
            <h1 style={style}>
                {title}
            </h1>
        </div>
    );
};
export default SiteTitle; 