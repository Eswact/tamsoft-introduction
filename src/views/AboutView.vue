<script setup>
    import { onMounted } from 'vue';
    import { useFadeIn } from '../scripts/common';
    useFadeIn();
</script>

<template>
  <div class="w-full flex flex-col relative justify-center items-center">
    <div class="w-full max-w-[1600px] relative flex flex-col justify-center items-center gap-[20px]">
      <!-- About Us -->
      <div class="fade-in w-full lg:flex-col-reverse lg:p-0 flex gap-[30px] justify-between items-center p-[20px] pb-0">
          <div class="lg:w-full lg:max-w-[100%] lg:min-h-0 flex flex-col gap-[40px] max-w-[50%] px-[40px]">
            <p class="h-0 text-[1.2rem] font-bold text-third">{{$t('aboutPage.aboutUs')}}</p>
            <h1 class="text-[3.2rem] xl:text-[2.5rem] lg:text-[2rem] sm:text-[1.5rem] font-bold pl-[24px] md:pl-0">Türkiye’nin yeni nesil web tabanlı ERP yazılımı</h1>
            <div class="relative flex flex-col gap-[10px] text-[1.2rem] sm:text-[1.1rem] p-[10px] text-justify">
              <div style="background: linear-gradient(135deg, #C326401a, transparent);" class="absolute top-[-20px] left-[-20px] w-[80px] h-[60px] border-t border-l border-main-shadow rounded-tl-md rounded-br-md"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem nostrum deserunt ad totam nulla corporis et dolores odio vel laborum optio laboriosam labore voluptates, architecto ut laudantium amet distinctio repellat.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laudantium quae pariatur dolorum! Sit accusantium illum odit soluta blanditiis quasi iure, ad incidunt vitae, dolore veniam maxime nam et commodi?</p>
              <div style="background: linear-gradient(135deg, transparent, #C326401a);" class="absolute bottom-[-20px] right-[-20px] w-[80px] h-[60px] border-b border-r border-main-shadow rounded-br-md rounded-tl-md"></div>
            </div>
          </div>
          <div class="lg:w-full lg:h-[unset] lg:gap-0 lg:p-0 relative flex flex-col items-center justify-center w-[50%] h-[520px]">
            <img class="absolute lg:rounded-none lg:max-h-[300px] xl:relative xl:w-full xl:top-0 xl:right-0 xl:h-auto object-cover w-[50%] h-[200px] top-[30px] right-[50px] rounded-md shadow-sm" src="https://dbh-group.com/blog/wp-content/uploads/2023/05/3d-office-design-interior-2021-12-09-02-43-07-utc-scaled.jpg" />
            <div class="xl:hidden w-[360px] h-[340px] bg-main-light rounded-md border border-main-shadow shadow-sm"></div>
            <img class="absolute xl:hidden object-cover w-[50%] h-[200px] bottom-[30px] left-[50px] rounded-md shadow-sm" src="https://asperbrothers.com/wp-content/uploads/2022/01/software-team_BB-853x470.jpg" />
          </div>
      </div>
      <!-- statistics -->
      <div class="fade-in w-full p-[20px] flex flex-col justify-center items-center gap-[20px]">
        <div class="relative md:flex-wrap md:gap-[20px] md:h-auto w-full max-w-[1100px] h-[120px] px-[40px] py-[20px] flex justify-around items-center border-[2px] border-main-shadow rounded-xl dark:bg-main-light shadow-lg overflow-hidden">
          <div class="topWave h-[40px]"></div>
          <div class="flex flex-col justify-center items-center">
            <span class="text-[3rem] max-h-[60px] text-main font-newAmsterdam">2000+</span>
            <h3 class="text-[1.2rem] font-semibold pr-[10px] font-ptSans">Mutlu Müşteri</h3>
          </div>
          <div class="flex flex-col justify-center items-center">
            <span class="text-[3rem] max-h-[60px] text-main font-newAmsterdam">10+</span>
            <h3 class="text-[1.2rem] font-semibold pr-[10px] font-ptSans">Yazılım</h3>
          </div>
          <div class="flex flex-col justify-center items-center">
            <span class="text-[3rem] max-h-[60px] text-main font-newAmsterdam">200+</span>
            <h3 class="text-[1.2rem] font-semibold pr-[10px] font-ptSans">Lorem Ipsum</h3>
          </div>
          <div class="flex flex-col justify-center items-center">
            <span class="text-[3rem] max-h-[60px] text-main font-newAmsterdam">100+</span>
            <h3 class="text-[1.2rem] font-semibold pr-[10px] font-ptSans">Bayi</h3>
          </div>
          <div class="flex flex-col justify-center items-center">
            <span class="text-[3rem] max-h-[60px] text-main font-newAmsterdam">20+</span>
            <h3 class="text-[1.2rem] font-semibold pr-[10px] font-ptSans">Personel</h3>
          </div>
        </div>
      </div>
      <!-- Our Vision & Mission -->
      <div class="fade-in w-full lg:flex-col flex gap-[30px] justify-between items-center p-[20px] pt-0">
        <div class="relative w-[500px] h-[500px] lg:w-full lg:h-[400px] lg:p-[20px] p-[50px]">
          <div class="w-full h-full bg-main-light rounded-lg lg:hidden"></div>
          <img class="absolute bottom-0 right-0 lg:relative lg:w-full lg:h-full w-[400px] h-[400px] object-cover rounded-lg" src="https://img.freepik.com/free-photo/young-business-woman-working-laptop-office_1303-22814.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid">
        </div>
        <div class="lg:w-full lg:max-w-[100%] lg:min-h-0 flex flex-col gap-[40px] max-w-[50%] px-[40px] lg:p-[20px]">
            <p class="h-0 text-[1.2rem] font-bold text-third">{{$t('aboutPage.visionAndMission')}}</p>
            <h1 class="text-[3.2rem] xl:text-[2.5rem] lg:text-[2rem] sm:text-[1.5rem] font-bold pl-[24px] md:pl-0">Türkiye’nin yeni nesil web tabanlı ERP yazılımı</h1>
            <div class="relative flex flex-col gap-[10px] text-[1.2rem] sm:text-[1.1rem] p-[10px] text-justify">
              <div style="background: linear-gradient(135deg, #C326401a, transparent);" class="absolute top-[-20px] left-[-20px] w-[80px] h-[60px] border-t border-l border-main-shadow rounded-tl-md rounded-br-md "></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem nostrum deserunt ad totam nulla corporis et dolores odio vel laborum optio laboriosam labore voluptates, architecto ut laudantium amet distinctio repellat.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laudantium quae pariatur dolorum! Sit accusantium illum odit soluta blanditiis quasi iure, ad incidunt vitae, dolore veniam maxime nam et commodi?</p>
              <div style="background: linear-gradient(135deg, transparent, #C326401a);" class="absolute bottom-[-20px] right-[-20px] w-[80px] h-[60px] border-b border-r border-main-shadow rounded-tl-md rounded-br-md"></div>
            </div>
        </div>
      </div>
      <!-- Our Team -->
      <div class="fade-in w-full flex-col flex gap-[30px] p-[20px]">
        <div class="w-full flex flex-col gap-[40px] max-w-[50%] lg:max-w-[100%] px-[40px]">
          <p class="h-0 text-[1.2rem] font-bold text-third">{{$t('aboutPage.ourTeam')}}</p>
          <h1 class="text-[3.2rem] xl:text-[2.5rem] lg:text-[2rem] sm:text-[1.5rem] font-bold pl-[24px] md:pl-0">{{$t('aboutPage.meetOurTeam')}}</h1>
        </div>
        <!-- team cards -->
        <div class="w-full flex flex-wrap items-center justify-center lgs:justify-center gap-[20px] lg:gap-[20px] px-[10px] lg:px-0">
          <div class="relative overflow-hidden w-[370px] h-[180px] p-[20px] flex items-start justify-between border-[2px] border-main-shadow shadow-md rounded-xl dark:bg-main-light">
            <div class="z-20 flex flex-col justify-between items-start h-full">
              <div>
                <h5 class="text-[1.55rem] font-semibold">Eren Sarıbay</h5>
                <span class="text-[0.9rem] text-text dark:text-[#aaa]">Frontend Developer</span>
              </div>
              <div>
                <a class="hover:scale-[1.1] duration-200 w-[32px] h-[32px] text-blue-700 flex justify-center items-center border border-[#ddd] dark:bg-[#eee] rounded-full" target="_blank" href="https://www.linkedin.com/in/eren-saribay/"><font-awesome-icon icon="fa-brands fa-linkedin" size="lg" /></a> 
              </div>
            </div>
            <div class="z-20">
              <img class="bg-[#F9E9EC] w-[120px] h-[120px] rounded-full" src="../images/team/eren.png" alt="Eren Sarıbay">
            </div>
            <div class="profileBg z-10 absolute top-[-200px] right-[-200px] w-[400px] h-[400px] rounded-full"></div>
          </div>
          <div class="relative overflow-hidden w-[370px] h-[180px] p-[20px] flex items-start justify-between border-[2px] border-main-shadow shadow-md rounded-xl dark:bg-main-light">
            <div class="z-20 flex flex-col justify-between items-start h-full">
              <div>
                <h5 class="text-[1.55rem] font-semibold">Eren Sarıbay</h5>
                <span class="text-[0.9rem] text-text dark:text-[#aaa]">Frontend Developer</span>
              </div>
              <div>
                <a class="hover:scale-[1.1] duration-200 w-[32px] h-[32px] text-blue-700 flex justify-center items-center border border-[#ddd] dark:bg-[#eee] rounded-full" target="_blank" href="https://www.linkedin.com/in/eren-saribay/"><font-awesome-icon icon="fa-brands fa-linkedin" size="lg" /></a> 
              </div>
            </div>
            <div class="z-20">
              <img class="bg-[#F9E9EC] w-[120px] h-[120px] rounded-full" src="../images/team/eren.png" alt="Eren Sarıbay">
            </div>
            <div class="profileBg z-10 absolute top-[-200px] right-[-200px] w-[400px] h-[400px] rounded-full"></div>
          </div>
          <div class="relative overflow-hidden w-[370px] h-[180px] p-[20px] flex items-start justify-between border-[2px] border-main-shadow shadow-md rounded-xl dark:bg-main-light">
            <div class="z-20 flex flex-col justify-between items-start h-full">
              <div>
                <h5 class="text-[1.55rem] font-semibold">Eren Sarıbay</h5>
                <span class="text-[0.9rem] text-text dark:text-[#aaa]">Frontend Developer</span>
              </div>
              <div>
                <a class="hover:scale-[1.1] duration-200 w-[32px] h-[32px] text-blue-700 flex justify-center items-center border border-[#ddd] dark:bg-[#eee] rounded-full" target="_blank" href="https://www.linkedin.com/in/eren-saribay/"><font-awesome-icon icon="fa-brands fa-linkedin" size="lg" /></a> 
              </div>
            </div>
            <div class="z-20">
              <img class="bg-[#F9E9EC] w-[120px] h-[120px] rounded-full" src="../images/team/eren.png" alt="Eren Sarıbay">
            </div>
            <div class="profileBg z-10 absolute top-[-200px] right-[-200px] w-[400px] h-[400px] rounded-full"></div>
          </div>
          <div class="relative overflow-hidden w-[370px] h-[180px] p-[20px] flex items-start justify-between border-[2px] border-main-shadow shadow-md rounded-xl dark:bg-main-light">
            <div class="z-20 flex flex-col justify-between items-start h-full">
              <div>
                <h5 class="text-[1.55rem] font-semibold">Eren Sarıbay</h5>
                <span class="text-[0.9rem] text-text dark:text-[#aaa]">Frontend Developer</span>
              </div>
              <div>
                <a class="hover:scale-[1.1] duration-200 w-[32px] h-[32px] text-blue-700 flex justify-center items-center border border-[#ddd] dark:bg-[#eee] rounded-full" target="_blank" href="https://www.linkedin.com/in/eren-saribay/"><font-awesome-icon icon="fa-brands fa-linkedin" size="lg" /></a> 
              </div>
            </div>
            <div class="z-20">
              <img class="bg-[#F9E9EC] w-[120px] h-[120px] rounded-full" src="../images/team/eren.png" alt="Eren Sarıbay">
            </div>
            <div class="profileBg z-10 absolute top-[-200px] right-[-200px] w-[400px] h-[400px] rounded-full"></div>
          </div>
          <div class="relative overflow-hidden w-[370px] h-[180px] p-[20px] flex items-start justify-between border-[2px] border-main-shadow shadow-md rounded-xl dark:bg-main-light">
            <div class="z-20 flex flex-col justify-between items-start h-full">
              <div>
                <h5 class="text-[1.55rem] font-semibold">Eren Sarıbay</h5>
                <span class="text-[0.9rem] text-text dark:text-[#aaa]">Frontend Developer</span>
              </div>
              <div>
                <a class="hover:scale-[1.1] duration-200 w-[32px] h-[32px] text-blue-700 flex justify-center items-center border border-[#ddd] dark:bg-[#eee] rounded-full" target="_blank" href="https://www.linkedin.com/in/eren-saribay/"><font-awesome-icon icon="fa-brands fa-linkedin" size="lg" /></a> 
              </div>
            </div>
            <div class="z-20">
              <img class="bg-[#F9E9EC] w-[120px] h-[120px] rounded-full" src="../images/team/eren.png" alt="Eren Sarıbay">
            </div>
            <div class="profileBg z-10 absolute top-[-200px] right-[-200px] w-[400px] h-[400px] rounded-full"></div>
          </div>
          <div class="relative overflow-hidden w-[370px] h-[180px] p-[20px] flex items-start justify-between border-[2px] border-main-shadow shadow-md rounded-xl dark:bg-main-light">
            <div class="z-20 flex flex-col justify-between items-start h-full">
              <div>
                <h5 class="text-[1.55rem] font-semibold">Eren Sarıbay</h5>
                <span class="text-[0.9rem] text-text dark:text-[#aaa]">Frontend Developer</span>
              </div>
              <div>
                <a class="hover:scale-[1.1] duration-200 w-[32px] h-[32px] text-blue-700 flex justify-center items-center border border-[#ddd] dark:bg-[#eee] rounded-full" target="_blank" href="https://www.linkedin.com/in/eren-saribay/"><font-awesome-icon icon="fa-brands fa-linkedin" size="lg" /></a> 
              </div>
            </div>
            <div class="z-20">
              <img class="bg-[#F9E9EC] w-[120px] h-[120px] rounded-full" src="../images/team/eren.png" alt="Eren Sarıbay">
            </div>
            <div class="profileBg z-10 absolute top-[-200px] right-[-200px] w-[400px] h-[400px] rounded-full"></div>
          </div>
          <div class="relative overflow-hidden w-[370px] h-[180px] p-[20px] flex items-start justify-between border-[2px] border-main-shadow shadow-md rounded-xl dark:bg-main-light">
            <div class="z-20 flex flex-col justify-between items-start h-full">
              <div>
                <h5 class="text-[1.55rem] font-semibold">Eren Sarıbay</h5>
                <span class="text-[0.9rem] text-text dark:text-[#aaa]">Frontend Developer</span>
              </div>
              <div>
                <a class="hover:scale-[1.1] duration-200 w-[32px] h-[32px] text-blue-700 flex justify-center items-center border border-[#ddd] dark:bg-[#eee] rounded-full" target="_blank" href="https://www.linkedin.com/in/eren-saribay/"><font-awesome-icon icon="fa-brands fa-linkedin" size="lg" /></a> 
              </div>
            </div>
            <div class="z-20">
              <img class="bg-[#F9E9EC] w-[120px] h-[120px] rounded-full" src="../images/team/eren.png" alt="Eren Sarıbay">
            </div>
            <div class="profileBg z-10 absolute top-[-200px] right-[-200px] w-[400px] h-[400px] rounded-full"></div>
          </div>
          <div class="relative overflow-hidden w-[370px] h-[180px] p-[20px] flex items-start justify-between border-[2px] border-main-shadow shadow-md rounded-xl dark:bg-main-light">
            <div class="z-20 flex flex-col justify-between items-start h-full">
              <div>
                <h5 class="text-[1.55rem] font-semibold">Eren Sarıbay</h5>
                <span class="text-[0.9rem] text-text dark:text-[#aaa]">Frontend Developer</span>
              </div>
              <div>
                <a class="hover:scale-[1.1] duration-200 w-[32px] h-[32px] text-blue-700 flex justify-center items-center border border-[#ddd] dark:bg-[#eee] rounded-full" target="_blank" href="https://www.linkedin.com/in/eren-saribay/"><font-awesome-icon icon="fa-brands fa-linkedin" size="lg" /></a> 
              </div>
            </div>
            <div class="z-20">
              <img class="bg-[#F9E9EC] w-[120px] h-[120px] rounded-full" src="../images/team/eren.png" alt="Eren Sarıbay">
            </div>
            <div class="profileBg z-10 absolute top-[-200px] right-[-200px] w-[400px] h-[400px] rounded-full"></div>
          </div>
          <div class="relative overflow-hidden w-[370px] h-[180px] p-[20px] flex items-start justify-between border-[2px] border-main-shadow shadow-md rounded-xl dark:bg-main-light">
            <div class="z-20 flex flex-col justify-between items-start h-full">
              <div>
                <h5 class="text-[1.55rem] font-semibold">Eren Sarıbay</h5>
                <span class="text-[0.9rem] text-text dark:text-[#aaa]">Frontend Developer</span>
              </div>
              <div>
                <a class="hover:scale-[1.1] duration-200 w-[32px] h-[32px] text-blue-700 flex justify-center items-center border border-[#ddd] dark:bg-[#eee] rounded-full" target="_blank" href="https://www.linkedin.com/in/eren-saribay/"><font-awesome-icon icon="fa-brands fa-linkedin" size="lg" /></a> 
              </div>
            </div>
            <div class="z-20">
              <img class="bg-[#F9E9EC] w-[120px] h-[120px] rounded-full" src="../images/team/eren.png" alt="Eren Sarıbay">
            </div>
            <div class="profileBg z-10 absolute top-[-200px] right-[-200px] w-[400px] h-[400px] rounded-full"></div>
          </div>
          <div class="relative overflow-hidden w-[370px] h-[180px] p-[20px] flex items-start justify-between border-[2px] border-main-shadow shadow-md rounded-xl dark:bg-main-light">
            <div class="z-20 flex flex-col justify-between items-start h-full">
              <div>
                <h5 class="text-[1.55rem] font-semibold">Eren Sarıbay</h5>
                <span class="text-[0.9rem] text-text dark:text-[#aaa]">Frontend Developer</span>
              </div>
              <div>
                <a class="hover:scale-[1.1] duration-200 w-[32px] h-[32px] text-blue-700 flex justify-center items-center border border-[#ddd] dark:bg-[#eee] rounded-full" target="_blank" href="https://www.linkedin.com/in/eren-saribay/"><font-awesome-icon icon="fa-brands fa-linkedin" size="lg" /></a> 
              </div>
            </div>
            <div class="z-20">
              <img class="bg-[#F9E9EC] w-[120px] h-[120px] rounded-full" src="../images/team/eren.png" alt="Eren Sarıbay">
            </div>
            <div class="profileBg z-10 absolute top-[-200px] right-[-200px] w-[400px] h-[400px] rounded-full"></div>
          </div>
          <div class="relative overflow-hidden w-[370px] h-[180px] p-[20px] flex items-start justify-between border-[2px] border-main-shadow shadow-md rounded-xl dark:bg-main-light">
            <div class="z-20 flex flex-col justify-between items-start h-full">
              <div>
                <h5 class="text-[1.55rem] font-semibold">Eren Sarıbay</h5>
                <span class="text-[0.9rem] text-text dark:text-[#aaa]">Frontend Developer</span>
              </div>
              <div>
                <a class="hover:scale-[1.1] duration-200 w-[32px] h-[32px] text-blue-700 flex justify-center items-center border border-[#ddd] dark:bg-[#eee] rounded-full" target="_blank" href="https://www.linkedin.com/in/eren-saribay/"><font-awesome-icon icon="fa-brands fa-linkedin" size="lg" /></a> 
              </div>
            </div>
            <div class="z-20">
              <img class="bg-[#F9E9EC] w-[120px] h-[120px] rounded-full" src="../images/team/eren.png" alt="Eren Sarıbay">
            </div>
            <div class="profileBg z-10 absolute top-[-200px] right-[-200px] w-[400px] h-[400px] rounded-full"></div>
          </div>
          <div class="relative overflow-hidden w-[370px] h-[180px] p-[20px] flex items-start justify-between border-[2px] border-main-shadow shadow-md rounded-xl dark:bg-main-light">
            <div class="z-20 flex flex-col justify-between items-start h-full">
              <div>
                <h5 class="text-[1.55rem] font-semibold">Eren Sarıbay</h5>
                <span class="text-[0.9rem] text-text dark:text-[#aaa]">Frontend Developer</span>
              </div>
              <div>
                <a class="hover:scale-[1.1] duration-200 w-[32px] h-[32px] text-blue-700 flex justify-center items-center border border-[#ddd] dark:bg-[#eee] rounded-full" target="_blank" href="https://www.linkedin.com/in/eren-saribay/"><font-awesome-icon icon="fa-brands fa-linkedin" size="lg" /></a> 
              </div>
            </div>
            <div class="z-20">
              <img class="bg-[#F9E9EC] w-[120px] h-[120px] rounded-full" src="../images/team/eren.png" alt="Eren Sarıbay">
            </div>
            <div class="profileBg z-10 absolute top-[-200px] right-[-200px] w-[400px] h-[400px] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .topWave {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      transform: rotate(180deg) scaleX(-1);
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23C326401a" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
      background-repeat: repeat-x;
      background-size: contain;
  }
  .dark .topWave {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23C3264099" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
  }
  .bottomWave {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23C326401a" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
      background-repeat: repeat-x;
      background-size: contain;
  }
  .dark .bottomWave {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23C3264099" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
  }
  .profileBg {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c32640' fill-opacity='0.13'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  .dark .profileBg {
    background-color: #C326401a;
    background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c32640' fill-opacity='0.5'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style>