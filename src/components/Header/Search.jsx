const Search = () => {
   const handleSubmit = e => {
      e.preventDefault();
   };

   return (
      <form onSubmit={handleSubmit} className="header__search">
         <input
            type="text"
            placeholder="Search for any IP address or domain"
            minlength="7"
            maxlength="15"
            size="15"
            pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
            required
         />
         <button type="submit">&gt;</button>
      </form>
   );
};

export default Search;
