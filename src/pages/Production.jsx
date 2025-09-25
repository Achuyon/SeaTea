import { Link } from "react-router-dom";
import "../assets/production.css";
import { useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function ProductionCard({ children }) {
    useEffect(() => {
        const cards = document.querySelectorAll(".production-card");
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }
                });
            },
            { threshold: 0.3 }
        );

        cards.forEach(card => observer.observe(card));

        return () => cards.forEach(card => observer.unobserve(card));
    }, []);

    return <>{children}</>;
}

const containerStyle = {
    width: "100%",
    height: "400px"
};

const center = {
    lat: 48.67049639703648,
    lng: 23.332749231330006
};

export default function Production() {
    return (
        <section className="Production">
            <section className="production-hero">
                <h1>ЕКО ВИРОБНИЦТВО</h1>
                <p className="infoProd1">Екологічне та відповідальне виробництво дозволяє зберегти природну силу складових чаю SeaTea з моменту збору, до моменту його заварювання у вашому горнятку.</p>
            </section>
            <img src=""></img>
            <section className="production-steps">
                <div className="step">
                    <img src="/images/production1.jpg"/>
                    <div className="step-text">
                        <h2>ЛОКАЦІЯ</h2>
                        <p className="infoProd">
                            На північних схилах Полонини Боржави, там, де височіє гора Гемба, серед крутих скель та лісів причаївся водоспад Шипіт. Іноді тільки несамовитий рев води може підказати, що поблизу є потік з мальовничим водограєм.
                        </p>
                        <p className="infoProd">Найближче до цієї природної атракції селище — Пилипець. Саме тут, поряд з одним із семи природних чудес України, на мальовничих схилах українських Карпат влаштувалися щедрі плантації дивовижної рослини — кипрію.</p>
                        <div className="gmap_cont">
                        <div className="gmap">
                        <LoadScript googleMapsApiKey="AIzaSyDyfKBgFBfr2eqRbc67AgpscP8FX5UeSg8">
                            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
                                
                            </GoogleMap>
                            </LoadScript>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="step">
                    <div className="step-text">
                        <h2>ВИГОТОВЛЕННЯ ЧАЮ</h2>
                        <p className="infoProd">Процес виготовлення смачного кіпрійнрого чаю поділяють на 6 основних етапів. При виготовленні чаю ми ретельно дотримуємося технологій на кожному з етапів, щоб Ви могли насолоджуватися дійсно смачним чаєм!</p>
                    </div>
                </div>
                <div className="step">
                    <ProductionCard>
                    <div className="production-card left">
                        <img src="/images/step-1.jpg"></img>
                        <div className="production-info">
                                <p className="infoProd2">
                                <h3>01. Збір чайного листа</h3>
                                <hr className="hrProduction" color="#2c3e50"></hr>
                                На збір кипрійного листа у гори вирушають невеликі групи працівників, щоб не затоптувати галявини кипрію, при чому збирається лише листя і не пошкоджується саме стебло рослини — для сталих і тривалих врожаїв протягом наступних років
                            </p>
                        </div>
                    </div>
                    </ProductionCard>
                    <ProductionCard>
                        <div className="production-card right">
                            <img src="/images/step-2.jpg"></img>
                            <div className="production-info">    
                                <p className="infoProd2">
                                    <h3>02. Підв’ялення</h3>
                                    <hr className="hrProduction" color="#2c3e50"></hr>
                                    <p className="infoProd2">
                                        Зібране листя розкладається на полицях під дахом спеціалізованого приміщення — сушарні. За кілька годин надлишкова волога з листа випаровується, листя стає підв’яленим та більш еластичним і підготовленим до наступного етапу.
                                    </p>
                                        Проводиться перший контроль якості сировини для подальшої обробки (відбираються лише цілі та неушкоджені листки).
                                    
                                </p>
                            </div>
                        </div>
                    </ProductionCard>
                    <ProductionCard>
                        <div className="production-card left">
                            <img src="/images/step-3.jpg"></img>
                            <div className="production-info">
                                <p className="infoProd2">
                                    <h3>03. Ферментація</h3>
                                    <hr className="hrProduction" color="#2c3e50"></hr>
                                    <p className="infoProd2">
                                        Ферментація є чи не найважливішим етапом у виробництві чаю. Саме від результату ферментації залежитиме міцність та аромат напою.
                                    </p>
                                        Ферментація складається з двох етапів: окислення повітрям та прожарка. Окислення запускає бродильні процеси, а прожарка їх зупиняє.
                                </p>

                            </div>
                        </div>
                    </ProductionCard>
                    <ProductionCard>
                        <div className="production-card right">
                            <img src="/images/step-4.jpg"></img>
                            <div className="production-info">
                                <p className="infoProd2">
                                    <h3>04. Окислення</h3>
                                    <hr className="hrProduction" color="#2c3e50"></hr>
                                    <p className="infoProd2">
                                        Для того, щоб листя почало окислятися — його скручують на спеціалізованому обладнанні (листокруті).
                                    </p>
                                        Важливо, що саме така технологія дозволяє не ламати та не подрібнювати сам лист, а лише розриває мемранні зв’язки між клітинами листа, після чого листя пускає сік та розпочинає процес бродіння і окислення.                                
                                    </p>
                            </div>
                        </div>
                    </ProductionCard>
                    <ProductionCard>
                        <div className="production-card left">
                            <img src="/images/step-5.jpg"></img>
                            <div className="production-info">
                                <p className="infoProd2">
                                    <h3>05. Прожарка</h3>
                                    <hr className="hrProduction" color="#2c3e50"></hr>
                                    <p className="infoProd2">
                                        Про те, що процес ферментації завершено свідчать колір та ароматний запах сировини.
                                    </p>
                                        Окислений лист відправляється на прожарку — сушка в спеціальному приміщенні зі сталою температурою та вологістю до повної готовності.                                
                                </p>
                            </div>
                        </div>
                    </ProductionCard>
                    <ProductionCard>
                        <div className="production-card right">
                            <img src="/images/step-6.jpg"></img>
                            <div className="production-info">
                                <p className="infoProd2">
                                    <h3>06. Фасування</h3>
                                    <hr className="hrProduction" color="#2c3e50"></hr>
                                    <p className="infoProd2">
                                        Готовий чай SeaTea міксується за авторськими рецептами наших технологів, та фасується у крафтову упаковку.
                                    </p>
                                    <p className="infoProd2">
                                        Крафтова упаковка виготовлена з екологічних та етичних (що швидко розкладаються) матеріалів — мінімальна кількість фарби, не містить клею, поліетилену чи поліпропилену.
                                    </p>
                                        Саме у такому вигляді органічний чай SeaTea портапить до ваших рук!                                
                                    </p>
                            </div>
                        </div>
                    </ProductionCard>
                </div>
            </section>
        </section>
    );
}
