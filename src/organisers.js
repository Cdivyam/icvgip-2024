const organisers = {
    "General Chairs":[
        {
            "name": "Venkatesh Babu",
            "image": "assets/5.jpg",
            "designation": "IISc Bangalore",
            "socials":
            {
                "scholar":"",
                "linkedin":"",
                "twitter":"",
                "website":"https://cds.iisc.ac.in/faculty/venky/"
            }
        },
        {
            "name": "Manjunath BS",
            "image": "assets/6.jpg",
            "designation": "UCSB",
            "socials":
            {
                "scholar":"",
                "linkedin":"",
                "twitter":"",
                "website":"https://vision.ece.ucsb.edu/people/bs-manjunath"
            }
        },
        {
            "name": "Nicu Sebe",
            "image": "assets/7.jpg",
            "designation": "University of Trento",
            "socials":
            {
                "scholar":"",
                "linkedin":"",
                "twitter":"",
                "website":"http://disi.unitn.it/~sebe/"
            }
        },
    ],
    "Program Chairs":[
        {
            "name": "Dinesh Babu Jayagopi",
            "image": "assets/8.jpg",
            "designation": "IIIT Bangalore",
            "socials":
            {
                "scholar":"",
                "linkedin":"",
                "twitter":"",
                "website":"https://www.iiitb.ac.in/faculty/dinesh-babu-jayagopi"
            }
        },
        {
            "name": "Sumohana Channappayya ",
            "image": "assets/9.jpg",
            "designation": "IIIT Hyderabad",
            "socials":
            {
                "scholar":"",
                "linkedin":"",
                "twitter":"",
                "website":"https://people.iith.ac.in/sumohana/"
            }
        },
        {
            "name": "Elisa Ricci ",
            "image": "assets/10.jpeg",
            "designation": "University of Trento",
            "socials":
            {
                "scholar":"",
                "linkedin":"",
                "twitter":"",
                "website":"https://eliricci.eu/"
            }
        },
    ],
    "Organizing Chairs":[
        {
            "name": "Shyam Rajagopalan",
            "image": "assets/014.jpg",
            "designation": "IBAB Bangalore",
            "socials":
            {
                "scholar":"",
                "linkedin":"",
                "twitter":"",
                "website":"https://www.ibab.ac.in/people/faculty-members/shyam-rajagopalan/"
            }
        },
        {
            "name": "Viswanath Gopalakrishnan",
            "image": "assets/012.jpg",
            "designation": "IIIT Bangalore",
            "socials":
            {
                "scholar":"",
                "linkedin":"",
                "twitter":"",
                "website":"https://www.iiitb.ac.in/faculty/viswanath-gopalakrishnan/"
            }
        },
    ],
    "Publicity Chairs":[
        {
            "name": "Raj Sharma",
            "image": "assets/013.jpg",
            "designation": "Walmart",
            "socials":
            {
                "scholar":"",
                "linkedin":"https://www.linkedin.com/in/raj-sharma-b38a886/",
                "twitter":"",
                "website":""
            }
        },
    ],
    "Sponsorship Chairs":[
        {
            "name": "Lokesh",
            "image": "assets/person.webp",
            "designation": "Samsung",
            "socials":
            {
                "scholar":"",
                "linkedin":"",
                "twitter":"",
                "website":""
            }
        },
    ],
    "Tutorial Chairs":[
        {
            "name": "Joseph",
            "image": "assets/person.webp",
            "designation": "Adobe",
            "socials":
            {
                "scholar":"",
                "linkedin":"",
                "twitter":"",
                "website":""
            }
        },
        {
            "name": "Rajiv Soundararajan",
            "image": "assets/015.jpg",
            "designation": "IISc Bangalore",
            "socials":
            {
                "scholar":"",
                "linkedin":"",
                "twitter":"",
                "website":"https://ece.iisc.ac.in/~rajivs/#/"
            }
        },
    ],
    "Vision India Chairs":[
        {
            "name": "Konda Reddy Mopuri",
            "image": "assets/016.jpg",
            "designation": "IIT Hyderabad",
            "socials":
            {
                "scholar":"",
                "linkedin":"",
                "twitter":"",
                "website":"https://www.iith.ac.in/ai/krmopuri/"
            }
        },
    ],
    "Publication Chair":[
        {
            "name": "Lakshmanan Nataraj",
            "image": "assets/person.webp",
            "designation": "Trimble Inc.",
            "socials":
            {
                "scholar":"",
                "linkedin":"",
                "twitter":"",
                "website":""
            }
        },
        {
            "name": "Anirban Chakraborty",
            "image": "assets/020.jpg",
            "designation": "IISc Bangalore",
            "socials":
            {
                "scholar":"",
                "linkedin":"",
                "twitter":"",
                "website":"https://cds.iisc.ac.in/people/anirban-chakraborty/"
            }
        },
    ],
    "Diversity and Inclusion Chairs":[
        {
            "name": "Vaanathi Sundaresan",
            "image": "assets/017.jpeg",
            "designation": "IISc Bangalore",
            "socials":
            {
                "scholar":"",
                "linkedin":"",
                "twitter":"",
                "website":"http://cds.iisc.ac.in/faculty/vaanathi/"
            }
        },
    ],
    "Local Chairs":[
        {
            "name": "Sushree Behera",
            "image": "assets/018.jpg",
            "designation": "IIIT Bangalore",
            "socials":
            {
                "scholar":"",
                "linkedin":"",
                "twitter":"",
                "website":"https://www.iiitb.ac.in/faculty/sushree-sangeeta-behera"
            }
        },
        {
            "name": "Raghuram Bharadwaj",
            "image": "assets/019.jpg",
            "designation": "IIIT Bangalore",
            "socials":
            {
                "scholar":"",
                "linkedin":"",
                "twitter":"",
                "website":"https://www.iiitb.ac.in/faculty/raghuram-bharadwaj"
            }
        },
    ],
}

function fillOrgPeople(){

    var organiserContainer = document.getElementById("organisers")

    let org_template_finalized = ``
    
    Object.keys(organisers).forEach(ele => {
        console.log(ele)
    
        let temp = getOrgTemplate(ele, organisers[ele])  
        org_template_finalized = org_template_finalized + temp    
    });
    
    console.log(org_template_finalized)
    organiserContainer.innerHTML = org_template_finalized
}

function getSocialTemplate(socials){
    let socials_finalized = ``
    let social_templates = {
        'linkedin':`
        <a class="text-black hover:text-blue-400" aria-label="LinkedIn" href="${socials['linkedin']}" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-7">
                <path fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                </path>
            </svg>
        </a>`,
        'scholar': `
        <a class="text-black hover:text-blue-400" aria-label="Google Scholar" href="${socials['scholar']}" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30"  class="h-9">
                <path 
                    d="M 11 4 L 3 9 L 8.4921875 9 C 8.4715892 9.0754986 8.4383718 9.1441171 8.421875 9.2226562 C 8.375875 9.4646562 8.3398437 9.7308125 8.3398438 10.007812 C 8.3398438 13.578812 11.990234 13.175781 11.990234 13.175781 L 11.990234 14.085938 C 11.990234 14.454937 12.47425 14.327172 12.53125 15.076172 C 12.28925 15.076172 7.4746094 14.937547 7.4746094 18.185547 C 7.4746094 21.445547 11.724609 21.285156 11.724609 21.285156 C 11.724609 21.285156 16.632812 21.504656 16.632812 17.472656 C 16.634813 15.063656 13.822266 14.2795 13.822266 13.3125 C 13.822266 12.3335 15.941406 12.045906 15.941406 9.7539062 C 15.941406 8.7519062 15.872828 8.03825 15.423828 7.53125 C 15.388828 7.49625 15.366031 7.4722188 15.332031 7.4492188 C 15.324304 7.4420199 15.31448 7.4367774 15.306641 7.4296875 L 15.429688 7.4296875 L 17.5 5.8769531 L 17.5 8 A 0.50005 0.50005 0 0 0 17.511719 8.1152344 A 1.0001 1.0001 0 0 0 17 9 L 17 10 A 1.0001 1.0001 0 1 0 19 10 L 19 9 A 1.0001 1.0001 0 0 0 18.488281 8.1152344 A 0.50005 0.50005 0 0 0 18.5 8 L 18.5 5.125 L 20 4 L 11 4 z M 11.691406 7.0527344 C 11.979219 7.0397031 12.268922 7.109625 12.544922 7.265625 C 12.751922 7.369625 12.946141 7.518125 13.119141 7.703125 C 13.476141 8.060125 13.7765 8.5784531 13.9375 9.1894531 C 14.3175 10.640453 13.823828 12.035781 12.798828 12.300781 C 11.784828 12.587781 10.654672 11.641172 10.263672 10.201172 C 10.090672 9.4991719 10.114547 8.8202969 10.310547 8.2792969 C 10.312395 8.2723193 10.316443 8.2666961 10.318359 8.2597656 C 10.321722 8.2581149 10.32682 8.253536 10.330078 8.2519531 C 10.386262 8.0380596 10.478099 7.8461668 10.589844 7.6875 C 10.795388 7.3872165 11.066477 7.1838352 11.404297 7.09375 C 11.499297 7.07075 11.595469 7.0570781 11.691406 7.0527344 z M 12.082031 15.685547 C 13.775031 15.558547 15.216313 16.490813 15.320312 17.757812 C 15.390313 19.013813 14.087812 20.131094 12.382812 20.246094 C 10.689813 20.361094 9.2274844 19.441547 9.1464844 18.185547 C 9.0654844 16.918547 10.377031 15.812547 12.082031 15.685547 z">
                </path>
            </svg>
        </a>`,
        'twitter': `
        <a class="text-black " aria-label="X" href="${socials['twitter']}" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"  class="h-7">
                <path fill="currentColor" 
                    d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z">
                </path>
            </svg>
        </a>`,
        'website': `
        <a class="text-black " aria-label="X" href="${socials['website']}" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-7">
                    <path stroke-linecap="round" stroke-linejoin="round" 
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" >
                    </path>
            </svg>
      
        </a>
        `
    }

    Object.keys(socials).forEach(ele=>{
        if(socials[ele] !== ''){
            socials_finalized = socials_finalized + social_templates[ele]
        }
    })
    return socials_finalized
}
function getPeopleTempalte(image, name, designation, socials){
    let socials_finalized = getSocialTemplate(socials)
    
    let person_template = `
        <!-- Individual Person Template -->
        <div class="flex flex-col md:flex-row items-center w-full xl:w-[45%] border-2 border-slate-300 p-2 md:p-5">
            <div class="flex md:h-[150px] w-[150px] sm:w-1/2  md:max-w-[150px] border-4 border-slate-300 justify-center">
                <img src="${image}" alt="person">
            </div>
            <div class="w-full flex flex-col p-2 md:p-5 items-center">
                <div class="text-xl font-bold text-center">${name}</div>
                <div class="h-[1px] w-full bg-slate-700 my-2"></div>
                <div>${designation}</div>
                <div class="flex flex-row w-full pt-2 gap-2 items-bottom justify-center">
                    ${socials_finalized}
                </div>
            </div>
        </div>
        <!-- ================== -->
    `
    return person_template
}

function getOrgTemplate(type, people){

    let person_template_finalized=``

    Object.keys(people).forEach(key=>{
        let temp = getPeopleTempalte(people[key].image, people[key].name, people[key].designation, people[key].socials)
        person_template_finalized = person_template_finalized + temp
    })
    
    let org_template = `
        <!-- Organiser Template 1 -->
        <div class="text-4xl p-6">${type}</div>
        <hr class="h-px mx-5 bg-slate-400 border-0">
        <div class="flex flex-col lg:flex-row lg:flex-wrap p-6 gap-8 justify-between">
            ${person_template_finalized}
        </div>
        <!-- ======= -->
    `
    return org_template

}
