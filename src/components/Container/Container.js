import styles from './Container.module.scss';

const Container = (props) =>{
    return (
        <div className={styles.container}>
            <span>
                {props.children}
            </span>
        </div>
    );
};

export default Container;