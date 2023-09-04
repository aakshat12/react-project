export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", {  email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
      navigate('/home')
  };
  


  return (
    <div className='login'>
        <form onSubmit={handleSubmit}>
            <label for='chk' aria-hidden='true'>Login</label>
            <input type="email" name="email" placeholder='Email' required="" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" name="pswd" placeholder='Password' required=""  onChange={(e) => setPassword(e.target.value)}/>
            <button>Login</button>

        </form>
    </div>
  )
}
export default Login;
