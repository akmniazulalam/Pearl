import React from 'react';
import SearchIcon from '@mui/icons-material/Search'; // Example using Material-UI icon

function SearchInput() {
  return (
    <div style={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search..."
        style={styles.input}
      />
      <SearchIcon style={styles.icon} />
    </div>
  );
}

const styles = {
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '5px 10px',
    width: '239px',
    height: '44px',
  },
  icon: {
    color: '#888',
    marginRight: '5px',
  },
  input: {
    border: 'none',
    outline: 'none',
    width: '100%',
    marginLeft: '5px',
    fontFamily: "Rubik",
    fontSize: '14px',
    color: '#999999'
  },
};



export default SearchInput;
