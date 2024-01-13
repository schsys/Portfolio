import Navigation from "@/components/Navigation"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@/utils/withMT";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare, faFacebookSquare, faGithubSquare, faWhatsappSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

const page = () => {
  return (
    <>
      <Navigation />
      <main className='md:mt-20 my-auto px-8'>
        <div className="flex flex-col justify-center">
          <div className="text-2xl md:pl-14 mb-4 font-bold">
            <h1>About Us</h1>
          </div>
          <div className="mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At assumenda odit sunt quisquam saepe quam eum porro repudiandae sequi recusandae, consequuntur animi veniam laboriosam ea totam nihil ad ipsam tempora.
          </div>
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="w-1/3">
              <Card className="w-80 rounded-md bg-opacity-60 bg-gradient-to-b from-blue-gray-400 to-gunmetal-500">
                <CardHeader floated={false} className="h-50 m-0 rounded-t-md rounded-b-none">
                  <img src={"/img/ldsch.png"} alt="profile-picture" width="100%" height="100%" />
                </CardHeader>
                <CardBody className="text-center p-0 my-3">
                  <Typography variant="h4" color="blue-gray" className="font-semibold text-white text-lg">
                    Luciano Schmarsow
                  </Typography>
                  <Typography color="blue-gray" className="text-xs" textGradient>
                    CEO / Founder
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-5 p-0 mb-2">
                  <Tooltip content="Like">
                    <Typography
                      as="a"
                      href="#facebook"
                      variant="lead"
                      color="blue"
                      textGradient
                    >
                      <FontAwesomeIcon
                        icon={faFacebookSquare}
                        className="text-white"
                      />
                    </Typography>
                  </Tooltip>

                  <Tooltip content="Follow">
                    <Typography
                      as="a"
                      href="#twitter"
                      variant="lead"
                      color="light-blue"
                      textGradient
                    >
                      <FontAwesomeIcon
                        icon={faTwitterSquare}
                        className="text-white"
                      />
                    </Typography>
                  </Tooltip>

                  <Tooltip content="Follow">
                    <Typography
                      as="a"
                      href="#twitter"
                      variant="lead"
                      color="light-blue"
                      textGradient
                    >
                      <FontAwesomeIcon
                        icon={faInstagramSquare}
                        className="text-white"
                      />
                    </Typography>
                  </Tooltip>

                  <Tooltip content="Follow">
                    <Typography
                      as="a"
                      href="#twitter"
                      variant="lead"
                      color="light-blue"
                      textGradient
                    >
                      <FontAwesomeIcon
                        icon={faGithubSquare}
                        className="text-white"
                      />
                    </Typography>
                  </Tooltip>

                  <Tooltip content="Chat">
                    <Typography
                      as="a"
                      href="#instagram"
                      variant="lead"
                      color="purple"
                      textGradient
                    >
                      <FontAwesomeIcon
                        icon={faWhatsappSquare}
                        className="text-white"
                      />
                    </Typography>
                  </Tooltip>
                </CardFooter>
              </Card>
            </div>
            <div className=" flex flex-col gap-5 w-2/3">
              <h3 className="font-bold text-xl">more text</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempora laudantium, ad ipsam temporibus iste suscipit aspernatur. Numquam, soluta maiores quia deleniti voluptatibus iure omnis obcaecati minima, mollitia esse quibusdam.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempora laudantium, ad ipsam temporibus iste suscipit aspernatur. Numquam, soluta maiores quia deleniti voluptatibus iure omnis obcaecati minima, mollitia esse quibusdam.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempora laudantium, ad ipsam temporibus iste suscipit aspernatur. Numquam, soluta maiores quia deleniti voluptatibus iure omnis obcaecati minima, mollitia esse quibusdam.</p>
            </div>
          </div>
          <div className="mb-8">
            <div>
              <div className="text-lg md:pl-14 mt-4 mb-1 font-bold">
                <h1>Some Text 1</h1>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae perferendis quod asperiores ad eaque non, ab magnam iste illo beatae libero error perspiciatis earum architecto magni necessitatibus quos. Numquam, dolorem.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae perferendis quod asperiores ad eaque non, ab magnam iste illo beatae libero error perspiciatis earum architecto magni necessitatibus quos. Numquam, dolorem.</p>
            </div>
            <div>
              <div className="text-lg md:pl-14 mt-4 mb-1 font-bold">
                <h1>Another section</h1>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae perferendis quod asperiores ad eaque non, ab magnam iste illo beatae libero error perspiciatis earum architecto magni necessitatibus quos. Numquam, dolorem.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae perferendis quod asperiores ad eaque non, ab magnam iste illo beatae libero error perspiciatis earum architecto magni necessitatibus quos. Numquam, dolorem.</p>
            </div>
            <div>
              <div className="text-lg md:pl-14 mt-4 mb-1 font-bold">
                <h1>The last One</h1>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae perferendis quod asperiores ad eaque non, ab magnam iste illo beatae libero error perspiciatis earum architecto magni necessitatibus quos. Numquam, dolorem.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae perferendis quod asperiores ad eaque non, ab magnam iste illo beatae libero error perspiciatis earum architecto magni necessitatibus quos. Numquam, dolorem.</p>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}

export default page