function BrandCard() {
    return (
        <>
            {Array.from({ length: 36 }).map((_, idx) => (
                    <div key={idx} className="col-lg-2 col-md-6 col-6 brand-images">
                       <a
                        href=" http://limak.link/r?url=https://www.osmanlidogaltas.com/" target="_blank"
                        className="full">
                         <img src="https://dynamex.link/uploads/home/shops/mavitr.png"
                                 alt="Osmanli Dogal Tas-dan çatdırılma, Osmanli Dogal Tas-dan Azərbaycana çatdırılma, Osmanli Dogal Tas çatdırılma"
                                 style={{width: "70%"}}/>
                      </a>
                    </div>
            ))}

        </>



    );
}

export default BrandCard;