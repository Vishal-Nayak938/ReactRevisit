import styles from './top.module.css'
const Top=()=>{

    return <>
<div className={styles.Top}>
<div className="container text-center ">

  <div class="row align-items-end">

    <div class="col">
      <input type="text" placeholder="Enter Todo Here" />
    </div>
    <div class="col">
     <input type="date" />
    </div>
    <div class="col">
    <button type="button" class="btn btn-success">Success</button>
    </div>

  </div>

</div>
</div>
    </>
}
export default Top