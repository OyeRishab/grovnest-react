import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const toggleBtn = useRef();
  const navLinks = useRef();

  const toggleNav = () => {
    toggleBtn.current.classList.toggle("fa-xmark");
    navLinks.current.classList.toggle("show");
  };
  return (
    <>
      <div className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <div className="logo">GROVNEST</div>
            <i
              className="toggle-btn fa-solid fa-bars"
              ref={toggleBtn}
              onClick={toggleNav}
            ></i>
          </div>
          <div ref={navLinks} className="nav-links">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
            <Link to={"about"} className="nav-link">
              About Us
            </Link>
            <Link to={"pricing"} className="nav-link">
              Pricing
            </Link>
            <Link to={"services"} className="nav-link">
              Services
            </Link>
            <Link to={"contact"} className="nav-link">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
        mollitia saepe. Laboriosam exercitationem reprehenderit non. Expedita
        illum iure numquam, atque corporis aperiam distinctio eos similique
        officia quo voluptatem incidunt quasi assumenda sequi, voluptate
        repellat odit ipsa qui nemo necessitatibus iusto enim. Earum repellat
        nam, eveniet iusto vitae facere autem perspiciatis sunt aut eos quas
        adipisci expedita nisi a quam alias, libero animi. Rerum ad placeat
        debitis perspiciatis corporis dolor aliquid praesentium aliquam a saepe
        vitae, tenetur suscipit sit exercitationem nesciunt voluptatem quo
        eveniet labore laboriosam ratione qui, alias quidem architecto? Delectus
        nisi error voluptates impedit, autem nesciunt eaque dolorem, expedita
        iure odit unde iusto repellendus dolor itaque porro adipisci qui atque
        reiciendis. Repudiandae fugiat, voluptatum perferendis quibusdam
        officiis doloremque quis minima. Exercitationem qui atque et, quod
        minima pariatur error quam eligendi, ad illo corrupti possimus, totam
        numquam beatae aperiam sequi voluptatum architecto aut? Qui reiciendis
        rem fugit minima sequi aperiam nemo explicabo perspiciatis quo atque,
        odit et a obcaecati, excepturi, nihil commodi molestias. Quasi eveniet
        sunt facilis inventore soluta ducimus excepturi eius blanditiis maxime
        tempora nemo, at explicabo magni beatae cum libero similique dignissimos
        quibusdam perspiciatis dolorum saepe nihil dicta? Quas dolore voluptas
        nulla error facere officiis qui maiores dolorum voluptatem quae vitae,
        natus commodi totam. Rerum, natus officia odit debitis sed et vero
        iusto, unde laboriosam veritatis deserunt labore est accusantium ea
        sapiente dignissimos pariatur. Molestiae similique sapiente repellendus
        placeat vel sint ratione asperiores expedita reprehenderit dolores
        deleniti qui accusamus exercitationem optio sed excepturi corporis
        temporibus commodi veniam fugiat, accusantium animi. Laboriosam, id
        corrupti inventore sequi consectetur eligendi eius reprehenderit ut
        itaque quas cum aut quis officia temporibus explicabo repellendus omnis.
        Dolores quam magni sed asperiores excepturi ipsum dolore, dolorem
        necessitatibus delectus impedit! Voluptatum officia fugit doloremque,
        eum corrupti repellat doloribus quasi perferendis minus animi eaque
        deleniti ad velit sapiente ipsam quae, placeat cumque vitae sequi optio
        modi eveniet. Quasi temporibus, accusantium consequuntur dignissimos
        quo, dolorum laborum adipisci repudiandae possimus earum obcaecati
        cupiditate. Neque ex iste doloribus, sit totam laborum, repudiandae
        dolorem distinctio, nihil nemo magnam nisi deleniti aspernatur
        excepturi? Molestiae, eius! Saepe libero beatae accusamus? Corrupti
        nostrum fuga impedit quae mollitia, architecto cum temporibus laboriosam
        eaque nulla tenetur iste minus tempora voluptas optio eveniet dicta sunt
        asperiores eius doloremque, quas nobis. Voluptatum quod placeat cumque
        aperiam quo modi saepe laboriosam voluptatem, aut ipsam voluptas
        recusandae, quasi eum cupiditate impedit nihil ut expedita? Quis
        exercitationem eaque laborum voluptas sapiente esse dolorum ipsa vero
        mollitia? Velit porro alias modi dolorum iste laudantium ut facere quasi
        libero placeat. Tempore magni, illum quos iusto incidunt sed ullam
        nesciunt ad unde distinctio odio in pariatur veritatis optio alias
        dolorem rerum, labore eveniet. Odio, dolorem rem? Fugiat, voluptate
        corporis. Earum, beatae eum ullam labore dolore voluptatum, commodi quod
        architecto soluta a vel exercitationem? Eligendi voluptas, ab dolorem
        dolores accusamus quod veritatis aut possimus, maxime porro quaerat?
        Dolor modi corrupti officia eveniet recusandae tenetur. Distinctio
        quibusdam maxime, saepe mollitia temporibus doloribus repellat
        blanditiis, eveniet consectetur ea veritatis, atque maiores quidem
        veniam in possimus sapiente magni.
      </p>
    </>
  );
}

export default Navbar;
