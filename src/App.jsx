import { useEffect } from 'react'
import './App.css'

function App() {
  let faceio;
  useEffect(() => {
    faceio = new faceIO("fioa5as3"); // dummy Public ID, use your own
  }, []);

  const handleRegister = async () => {
    try {
      let response = await faceio.enroll({
        locale: "auto",
        payload: { // can be anything that we want to associate with the registered user
          email: "muhammadin87@gmail.com",
          pin: "1234",
        },
      });

      console.log(`All the Details of returned data: ${JSON.stringify(response)}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(`All the Details of returned data: ${JSON.stringify(response)}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1>Face Authentication example using FaceIO</h1>
      <button onClick={handleRegister}>Register your Face</button>
      <button onClick={handleLogIn}>Log In</button>
    </section>
  );
}

export default App;
