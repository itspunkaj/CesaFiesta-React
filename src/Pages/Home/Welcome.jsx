
function Welcome() {
  return (
    <div className="flex justify-center bg-fourthColor">
      <div className="w-[90%] max-w-[1100px] lg:w-[80%] my-16 h-auto min-h-[90%] grid grid-cols-12 divide-x divide-solid divide-firstColor">
        <div className="col-span-12 md:col-span-8 pr-2">
          <div className="text-3xl font-semibold">Introduction</div>
          <div className="my-10 text-lg leading-relaxed">The department of civil engineering at IIT Ropar is all set to host
            the Civil Engineering Student Association Fiesta (CESAFIESTA)
            for the second consecutive year on March 9 and 10, 2024,
            respectively. This 2-day symposium is attributed to the
            celebration of science, innovation, and research in a diverse
            spectrum of civil engineering. This programme is a collaborative
            platform aimed at the amalgamation of academics and industry
            through the versatile nexus of technology and sustainability. One
            of the rudimentary aims of this event is to unite researchers from
            various sectors and nurture them for the collective advancement
            of the country through skill development, breakthrough ideas,
            and groundbreaking inventions.
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 pl-4">
          <div className="text-3xl font-semibold">Notifications</div>
          <div className="my-10 text-xl leading-relaxed">
            <ul className="list-disc list-inside">
            <li><a className="underline text-firstColor font-medium" href='https://drive.google.com/file/d/14yjOkd-korM4az6QzWiU9iJTavwhAvRT/view?usp=sharing' target='blank_'>Detailed Brochure</a></li>
              <li><a className="underline text-firstColor font-medium" href='https://drive.google.com/file/d/113gES1EJMbyKRWXVystK-q9_XwNoPHl9/view?usp=sharing' target='blank_'>Announcement Invitation</a></li>
              <li><a className="underline text-firstColor font-medium" href='https://drive.google.com/file/d/1zkMMuBF0aRp64Bf8JqZOoTLHBchT8bIB/view?usp=sharing' target='blank_'>Sponsorship Brochure</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome