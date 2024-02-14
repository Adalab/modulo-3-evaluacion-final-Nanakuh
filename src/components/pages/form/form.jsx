function Form() {

   return (
    <form>
    <input
      className="search"
      type="text"
      placeholder="Busca por personaje..."
      onInput={handleInput}
    />
  </form>
   );
}

export default Form;

