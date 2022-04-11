// eslint-disable-next-line @typescript-eslint/no-unused-vars
<<<<<<< HEAD
import styles from './app.module.scss';
// import NxWelcome from './nx-welcome';

// import { Route, Link } from 'react-router-dom';

export function App() {
  return (      
    <div className={styles['text']}>
      Portal with Tailwind
    </div>
=======
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <NxWelcome title="portal" />
      <div />
    </>
>>>>>>> 2a7844feb2976b2305401744444286acd6809f32
  );
}

export default App;
