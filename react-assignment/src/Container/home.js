import React from 'react'

export default function Home({ setSideMenu, sideMenu, setmodal }) {
    return (
        <div className="main-container">
            <div className="header-wrapper flex-row justify-center ">

                <nav className='flex-row header-container max-width grow1'>

                    <span onClick={() => { setSideMenu(!sideMenu) }}>&#9776; </span>
                    <div className="logo">
                        Portfolio


                    </div>


                </nav>
            </div>
            <div className="banner-wrapper flex-row justify-center">
                <div className='max-width banner-container row-to-col-mob flex-row grow1'>

                    <div className="grow1 flex-col justify-center align-center">

                        <p className="paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam delectus obcaecati harum
                            vero,
                            veritatis commodi praesentium mollitia, ad provident nostrum corporis eligendi aliquam ab
                            consectetur veniam pariatur, rem nulla esse!
                        </p>
                        <button className="modelbutton" onClick={() => { setmodal(true) }} id="myBtn">Contact Me</button>
                    </div>

                </div>

            </div>

            <div className="testimonial-wrapper flex-row justify-center">
                <div className='max-width   flex-row row-to-col-mob grow1'>

                    <div className="grow2 ">
                        <h2>
                            About Me
                        </h2>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores obcaecati molestiae
                            necessitatibus, deleniti odio, nam quos ad labore porro enim asperiores explicabo? Odio vero
                            ipsum molestias beatae assumenda ducimus? Aperiam?
                        </p>
                    </div>
                    <div className='divider'></div>
                    <div className="grow1">
                        <h2>
                            Testimonials
                        </h2>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet itaque autem rem
                            perferendis
                            voluptatum quisquam mollitia ab hic deleniti sint aperiam laborum expedita libero
                            perspiciatis,
                            quae pariatur ut, doloremque soluta!
                        </p>

                        <div className="flex-row justify-end">
                            <p style={{ margin: "30px" }}>
                                -by Gertjan de Boer
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testemonial-wrapper flex-row justify-center">

                <div className='grow1 max-width'>


                    <div>
                        <h2>
                            We Choose Us
                        </h2>
                    </div>
                    <div className="flex-row blog-item-container">

                        {
                            [1, 2, 3, 4].map((item, i) => {
                                return <div className="blog-item">

                                    <h3>
                                        OUR TEAM
                                </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iste similique
                                        atque
                                        harum illum ad voluptas est, numquam accusamus obcaecati, aperiam vero aliquid. Neque
                                        nostrum placeat saepe tempore recusandae in!
                                </p>

                                    <div>
                                        <button >
                                            READ MORE
                                    </button>

                                    </div>


                                </div>
                            })
                        }





                    </div>

                </div>




            </div>









        </div>


    )
}
