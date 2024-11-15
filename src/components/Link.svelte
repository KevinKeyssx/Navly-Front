<style>
    /* From Uiverse.io by Smit-Prajapati */ 
.card_ {
    width: 300px;
    border-radius: 20px;
    background: #1b233d;
    /* padding: 0px; */
    overflow: hidden;
    /* border: #ffffff  5px; */
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card_:hover {
  transform: scale(1.05);
}

.card_ .top-section {
  height: 150px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg, rgb(4, 159, 187) 0%, rgb(80, 246, 255) 100%);
  position: relative;
}

.card_ .top-section .border {
  border-bottom-right-radius: 10px;
  height: 30px;
  width:210px;
  /* background: white; */
  background: #1b233d;
  position: relative;
  transform: skew(-40deg);
  box-shadow: -10px -10px 0 0 #1b233d;
  border-style: none;

}

.card_ .top-section .border::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  top: 0;
  right: -15px;
  /* background: rgba(255, 255, 255, 0); */
  border-top-left-radius: 10px;
  /* box-shadow: -5px -5px 0 2px #1b233d; */
}

.card_ .top-section::before {
  content: "";
  position: absolute;
  top: 30px;
  left: 0;
  /* background: rgba(255, 255, 255, 0); */
  height: 15px;
  width: 15px;
  border-top-left-radius: 15px;
  box-shadow: -5px -5px 0 2px #1b233d;
}

.card_ .top-section .icons {
  position: absolute;
  top: 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
}

.card_ .top-section .icons .logo {
  height: 100%;
  aspect-ratio: 1;
  padding: 7px 0 7px 15px;
}

.card_ .top-section .icons .logo .top-section {
  height: 100%;
}

.card_ .top-section .icons .social-media {
    height  : 100%;
    padding : 8px 10px;
    display : flex;
    gap     : 12px;
}

.card_ .top-section .icons .social-media .svg {
  height: 100%;
  fill: #1b233d;
}

.card_ .top-section .icons .social-media .svg:hover {
  fill: white;
}

.card_ .bottom-section {
  margin-top: 10px;
  /* padding: 10px 5px; */
}

.card_ .bottom-section .title {
  display: block;
  font-size: 12px;
  /* font-weight: bolder; */
  color: white;
  text-align: center;
  /* letter-spacing: 2px; */
}

.card_ .bottom-section .row {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.card_ .bottom-section .row .item {
  flex: 30%;
  text-align: center;
  padding: 0px 0px 5px 0px;
  color: rgba(170, 222, 243, 0.721);
}

.card_ .bottom-section .row .item .big-text {
  font-size: 12px;
  display: block;
}

.card_ .bottom-section .row .item .regular-text {
  font-size: 9px;
}

.card_ .bottom-section .row .item:nth-child(2) {
  border-left: 1px solid rgba(255, 255, 255, 0.126);
  border-right: 1px solid rgba(255, 255, 255, 0.126);
}
</style>

<script>
    export let backgroundImageUrl = 'https://images.unsplash.com/photo-1578170222009-c7893aa20afd?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4MTZ8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max'; // Recibe la URL de la imagen como prop
</script>


<div class="card_ variant-ghost-primary">
    <div class="top-section" style="background-image: url({backgroundImageUrl});">
        <div class="border"></div>

        <div class="icons">
            <div class="ml-3 text-[12px] font-semibold items-center flex justify-start mb-0.5">
                Nombre de wea
            </div>

            <div class="social-media">
                <svg class="svg" viewBox="-3.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>view</title> <path d="M12.406 13.844c1.188 0 2.156 0.969 2.156 2.156s-0.969 2.125-2.156 2.125-2.125-0.938-2.125-2.125 0.938-2.156 2.125-2.156zM12.406 8.531c7.063 0 12.156 6.625 12.156 6.625 0.344 0.438 0.344 1.219 0 1.656 0 0-5.094 6.625-12.156 6.625s-12.156-6.625-12.156-6.625c-0.344-0.438-0.344-1.219 0-1.656 0 0 5.094-6.625 12.156-6.625zM12.406 21.344c2.938 0 5.344-2.406 5.344-5.344s-2.406-5.344-5.344-5.344-5.344 2.406-5.344 5.344 2.406 5.344 5.344 5.344z"></path> </g></svg>
                <svg class="svg" viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M960 160h-291.2a160 160 0 0 0-313.6 0H64a32 32 0 0 0 0 64h896a32 32 0 0 0 0-64zM512 96a96 96 0 0 1 90.24 64h-180.48A96 96 0 0 1 512 96zM844.16 290.56a32 32 0 0 0-34.88 6.72A32 32 0 0 0 800 320a32 32 0 1 0 64 0 33.6 33.6 0 0 0-9.28-22.72 32 32 0 0 0-10.56-6.72zM832 416a32 32 0 0 0-32 32v96a32 32 0 0 0 64 0v-96a32 32 0 0 0-32-32zM832 640a32 32 0 0 0-32 32v224a32 32 0 0 1-32 32H256a32 32 0 0 1-32-32V320a32 32 0 0 0-64 0v576a96 96 0 0 0 96 96h512a96 96 0 0 0 96-96v-224a32 32 0 0 0-32-32z" ></path><path d="M384 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM544 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM704 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0z"></path></g></svg>
                <svg class="svg"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
        </div>
    </div>

    <div class="bottom-section">
        <span class="title">Esta es la descripción de la wea de la página para que sepan que wea es esto</span>

        <div class="row row1">
            <div class="item">
                <span class="big-text">2626</span>
                <span class="regular-text">UI elements</span>
            </div>

            <div class="item">
                <span class="big-text">100%</span>
                <span class="regular-text">Free for use</span>
            </div>

            <div class="item">
                <span class="big-text">38,631</span>
                <span class="regular-text">Contributers</span>
            </div>
        </div>
    </div>
</div>