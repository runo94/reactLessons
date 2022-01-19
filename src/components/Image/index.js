const Image = (props) => {
    const { image, myAlt, myTitle } = props;
    return <img src={image} className="App-logo" alt={myAlt} title={myTitle} />
}
export default Image;