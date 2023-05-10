/**
 * Build a React component to display an image with a caption. The image and caption should be passed as props.
 */

export const Image = (props) => {

    const{imageLink, caption} = props

    return(
        <div>
            <h1>Image</h1>
            <img src={imageLink} alt={caption} style={{height:"200px"}}/>
            <h3>{caption}</h3>
        </div>
    )
}