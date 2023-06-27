import css from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={css.homepage}>
      
      <h2 className={css.homepagetitle}>
      This is a phone book. You can create your own unique account and store your contacts in it.
      </h2>
    </div>
  );
};

export default HomePage;