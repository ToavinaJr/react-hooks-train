// App.tsx
import ReducerTutorial from './components/ReducerTutorial';
import EffectTutorial from './components/EffectTutorial';
import RefTutorial from './components/RefTutorial';
import LayoutEffectTutorial from './components/LayoutEffectTutorial';
import ImperativeHandle from './components/ImperativeHandle';
import { useRef } from 'react';
import ContextTutorialProb from './components/ContextTutorialProb';
import './App.css';
import ContextTutorial from './components/ContextTutorial';
import MemoTutorial from './components/MemoTutorial';


function App() {
  const btnRef = useRef<{ alterToggle: () => void } | null>(null);
  return (
    <>
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
      <LayoutEffectTutorial />
      <button
        onClick={() => btnRef.current?.alterToggle()}
      >
        Button from parent
      </button>
      <ImperativeHandle ref={btnRef} />

      <ContextTutorialProb />
      <ContextTutorial />
      <MemoTutorial />
    </>
  );
}

export default App;