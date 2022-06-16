import Navbar1 from './components/Navbar/Navbar';
import Multistep from './components/MultiStep/index';
import StepOne from './components/MultiStep/StepOne';
import StepTwo from './components/MultiStep/StepTwo';
import StepThree from './components/MultiStep/StepThree';
import '../src/App.css'

function App() {
  const steps = [
    {name: 'StepOne', component: <StepOne/>},
    {name: 'StepTwo', component: <StepTwo/>},
    {name: 'StepThree', component: <StepThree/>}
    // {name: 'StepFour', component: <StepFour/>}
  ];
  return (
    <>
      <Navbar1/>
      
      <Multistep activeStep={1} showNavigation={true} steps={steps}/>
    </>
  );
}

export default App;
