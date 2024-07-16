import {
  Box,
  Flex,
  Text,
  useToken,
} from "@chakra-ui/react"

import type { ChildOnlyProp } from "@/lib/types"
import type { MdPageContent, SharedFrontmatter } from "@/lib/interfaces"

import { List as ButtonDropdownList } from "@/components/ButtonDropdown"
import { ButtonLink } from "@/components/Buttons"
import { ContentHero } from "@/components/Hero"
import { Image } from "@/components/Image"
import LeftNavBar from "@/components/LeftNavBar"
import {
  ContentContainer,
  MobileButton,
  MobileButtonDropdown,
  Page,
} from "@/components/MdComponents"
import { ApplyNow } from "@/components/Translatathon/ApplyNow"
import { LocalCommunitiesList } from "@/components/Translatathon/LocalCommunitiesList"

import translatathonHeroImg from "@/public/images/heroes/translatathon-hero.png"
import WhyWeDoItImage from "@/public/images/translatathon/man-baby-woman.png"
import HowDoesItWorkImage from "@/public/images/translatathon/round-table.png"
import robotImage from '@/public/images/wallet.png'

const ContentSplit = ({children}) => {
  return (
    <Flex
      w="full"
      direction={{ base: "column", md: "row" }}
    >
      <Box>
        {children}
      </Box>
      <Flex maxHeight="300px">
        <Image
          src={robotImage}
          alt="robot"
          style={{ objectFit: "contain" }}
        />
      </Flex>
    </Flex>
  )
}

const TwoColumnContent = (props: ChildOnlyProp) => (
  <Flex
    w="full"
    direction={{ base: "column", md: "row" }}
    align="flex-start"
    me={{ lg: 8 }}
    mt={16}
    {...props}
  />
)

const WhyWeDoItColumn = (props: ChildOnlyProp) => (
  <Flex w="full" m={{ base: "auto 0", lg: 0 }} me={{ lg: 8 }} direction="column">
    <Box m="auto">
      <Image
        src={WhyWeDoItImage}
        alt=''
        height="272"
      />
    </Box>
    <Box>
      {props.children}
    </Box>
  </Flex>
)

const HowDoesItWorkColumn = (props: ChildOnlyProp) => (
  <Flex w="full" m={{ base: "auto 0", lg: 0 }} ms={{ lg: 8 }} direction="column">
    <Box m="auto">
      <Image
        src={HowDoesItWorkImage}
        alt=''
        height="272"
      />
    </Box>
    <Box>
      {props.children}
    </Box>
  </Flex>
)

// Translatathon layout components
export const translatathonComponents = {
  // Export empty object if none needed
  ApplyNow,
  ContentSplit,
  HowDoesItWorkColumn,
  LocalCommunitiesList,
  TwoColumnContent,
  WhyWeDoItColumn
}

type TranslatathonLayoutProps = ChildOnlyProp &
Pick<MdPageContent, "slug" | "tocItems"> & {
  frontmatter: SharedFrontmatter
}

export const TranslatathonLayout = ({
  children,
  frontmatter,
  slug,
  tocItems,
}: TranslatathonLayoutProps) => {
  const lgBp = useToken("breakpoints", "lg")

  const dropdownLinks: ButtonDropdownList = {
    text: "Translatathon dropdown",
    ariaLabel: "Translatathon dropdown",
    items: [
      {
        text: "Translatathon",
        to: "/translatathon",
        matomo: {
          eventCategory: "translatathon menu",
          eventAction: "click",
          eventName: "translatathon hub",
        },
      },
      {
        text: "Details and submission criteria",
        to: "/translatathon/details",
        matomo: {
          eventCategory: "translatathon menu",
          eventAction: "click",
          eventName: "details and submission criteria",
        },
      },
      {
        text: "Terms and conditions",
        to: "/translatathon/terms-and-conditions",
        matomo: {
          eventCategory: "translatathon menu",
          eventAction: "click",
          eventName: "terms and conditions",
        },
      },
      {
        text: "Local communities",
        to: "/translatathon/local-communities",
        matomo: {
          eventCategory: "translatathon menu",
          eventAction: "click",
          eventName: "local communities",
        },
      },
    ],
  }

  return (
    <Box
      position="relative"
      width="full"
      dir={'ltr'}
    >
      <ContentHero
        breadcrumbs={{ slug, startDepth: 1 }}
        title={frontmatter.title}
        maxHeight={'400px'}
        description={<>
          <Text>Welcome to the thereum.org Translatathon!
          A translatathon is a collaborative and competitive hackathon-style event where individuals and teams compete for prizes by translating ethereum.org content into different languages.</Text>
          <Flex>
            <ButtonLink href="/">Apply to translate</ButtonLink> 
          </Flex>
        </>}
        heroImg={translatathonHeroImg}
        blurDataURL={""}
      />
      <Page>
        <LeftNavBar
          hideBelow={lgBp}
          dropdownLinks={dropdownLinks}
          tocItems={tocItems}
        />
        <ContentContainer id="content">
          {children}
        </ContentContainer>
        <MobileButton>
          <MobileButtonDropdown list={dropdownLinks} />
        </MobileButton>
      </Page>
    </Box>
  )
}