function GithubUser({ name }) {

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${name}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (data) {
    return (
      <div>
        <div> Name : {data.login} </div>
        {JSON.stringify(data)}
      </div>
    );
  }
  return <div> no DATA</div>;
}
