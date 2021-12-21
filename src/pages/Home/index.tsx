import { useUserData } from 'stores/useUserData';

export default function Home() {
  const { name, age } = useUserData();

  function changeUser() {
    useUserData.setState({
      name: 'Bot 1',
      age: 30,
    });
  }

  return (
    <>
      <h1>Home</h1>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <button type="button" onClick={changeUser}>
        Mudar usuario
      </button>
    </>
  );
}
