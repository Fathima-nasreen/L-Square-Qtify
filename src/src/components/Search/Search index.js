import {ReactComponent as Search} from './Search-icon.svg';

 const SearchBox = () => {
    return <form style= {{
        display: 'flex',
        minWidth: '570px'
    }}>
        <input placeholder='Search an albums of your choice'
        style={{
            flex:1,
            borderRadius: '8px 0 0 8px',
            padding: '8px'
        }}
        />
        <button style= {{
            width: '66px',
            height: '48px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '0 8px 8px 0',
        }}
        >
            <Search width={20} height={20} />

         </button> 
       </form>
 }
 export default SearchBox;