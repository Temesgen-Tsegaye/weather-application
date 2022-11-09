import styles from "./Body.module.css";
import Result from "./Result/Result";
const Body = ({ apiData, toggle,input}) => {
  return (
    <div className={styles.body}>
      {toggle && Object.keys(apiData).length !== 0 && (
        <Result apiData={apiData} />
      )}
      {!toggle && <div className={styles.errr}>opps {input} is not found! </div>}
    </div>
  );
};
export default Body;