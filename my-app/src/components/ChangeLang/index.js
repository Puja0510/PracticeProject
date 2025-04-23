import {LangProvider} from "./LanguageContext";
import LangToggler from "./LangToggler";


const LanguageChange = () =>  {
    return (
      <div style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <LangProvider>
            <LangToggler/>
        </LangProvider>
      </div>
    );
  }

export default LanguageChange;