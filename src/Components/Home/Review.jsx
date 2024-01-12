import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Reviews } from "../../assets/Data/Reviews";
import Rating from "react-rating";
//  
const Review = () => {

    const [sliderRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 2, spacing: 5 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 3, spacing: 10 },
            },
        },
        slides: { perView: 1 },
    })

    return (
        <div>
            <div ref={sliderRef} className="keen-slider">
                <div className="flex mx-5 justify-around lg:px-48 pt-10 pb-10 bg-[#f8f9fd] ">
                    {
                        Reviews.map((review) => (
                            <div key={review.name}>


                                <div className="card text-center lg:h-[350px] h-[450px] w-96 bg-base-100 shadow-xl keen-slider__slide ">
                                    <div className="my-5">
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review.rating}

                                        />
                                    </div>
                                    <div className="card-body ">
                                        <h2 className="text-center lg:text-xl font-medium">{review.review}</h2>
                                        <div>
                                            <p className="text-xl lg:text-3xl font-medium">{review.name}</p>
                                            <p className="text-4xl lg:text-xl font-semibold">{review.position}</p>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Review;