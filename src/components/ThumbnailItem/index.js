import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, setActiveThumbnailId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const thumbnail = isActive ? 'active-mode' : ''

  const onClickChangeImage = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        className="thumbnail-button"
        type="button"
        onClick={onClickChangeImage}
      >
        <img
          alt={thumbnailAltText}
          src={thumbnailUrl}
          className={`thumbnail-Image ${thumbnail}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
