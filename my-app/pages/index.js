import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Here are the Dog's food</h3>
      </div>
      <div className={styles.firstSection}>
        <div className={styles.mainDiv}>
          <div className={styles.leftCol}>
            Brand
            <div className="topping">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
              />
              Paneer
            </div>
            <div className="topping">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
              />
              Paneer
            </div>
            <div className="topping">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
              />
              Paneer
            </div>
            <div className="topping">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
              />
              Paneer
            </div>
            <div className="topping">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
              />
              Paneer
            </div>
          </div>
          <div className={styles.leftCol}>
            Breed Life Stage
            <div className="topping">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
              />
              Paneer
            </div>
            <div className="topping">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
              />
              Paneer
            </div>
            <div className="topping">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
              />
              Paneer
            </div>
            <div className="topping">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
              />
              Paneer
            </div>
            <div className="topping">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
              />
              Paneer
            </div>
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.headingSec}>
            <h2>Dog's Food</h2>
            <div className={styles.filterInput}>
              <label for="gsearch">Sort By:</label>
              <input type="search" id="gsearch" name="gsearch" />
              <input type="submit" />
            </div>
          </div>

          <div className={styles.imageSec}>
            <img src="https://www.digitalmenta.com/wp-content/uploads/2019/04/potenciar-campanas-shopping.jpg"></img>
          </div>
          <div className={styles.productField}>
            <div className={styles.productCard}>
              <img src="https://www.accenture.com/t20210420T065933Z__w__/id-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/General/93/Accenture-PG-Case-Study-768x432.jpeg"></img>
              <a href={"/" + "Product1"}>
                <p className={styles.productName}>Product 1</p>
              </a>
              <p className={styles.price}>Rs.100</p>
              <div className={styles.icon}>
                <p>❤</p>
                <p>Add to cart</p>
              </div>
            </div>
            <div className={styles.productCard}>
              <img src="https://offautan-uc1.azureedge.net/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph"></img>
              <a href={"/" + "Product1"}>
                <p className={styles.productName}>Product 1</p>
              </a>
              <p className={styles.price}>Rs.100</p>
              <div className={styles.icon}>
                <p>❤</p>
                <p>Add to cart</p>
              </div>
            </div>
            <div className={styles.productCard}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg"></img>
              <a href={"/" + "Product1"}>
                <p className={styles.productName}>Product 1</p>
              </a>
              <p className={styles.price}>Rs.100</p>
              <div className={styles.icon}>
                <p>❤</p>
                <p>Add to cart</p>
              </div>
            </div>
            <div className={styles.productCard}>
              <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"></img>
              <a href={"/" + "Product1"}>
                <p className={styles.productName}>Product 1</p>
              </a>
              <p className={styles.price}>Rs.100</p>
              <div className={styles.icon}>
                <p>❤</p>
                <p>Add to cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
