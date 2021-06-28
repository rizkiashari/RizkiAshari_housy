import notfoundLogo from '../../assets/logoIcon/NotFound.svg'
const NotFound = () => {
  return (
    <div className="Center">
      <img src={notfoundLogo} alt="IconNotFound" />
      <div>
        <p>House not Found</p>
      </div>
    </div>
  )
}

export default NotFound
