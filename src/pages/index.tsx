import dynamic from 'next/dynamic';

const App = dynamic(() => import('./_app'), { ssr: false });

export default App;
