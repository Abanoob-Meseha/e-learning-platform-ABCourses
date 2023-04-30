import { Navbar, Link, Text, Avatar, Dropdown ,Button } from "@nextui-org/react";
import { useRouter } from 'next/router';
import LoginModal from "../loginModal/loginModal";
import SignupModal from "../signupModal/signupModal";

export default function ResponsiveNavbar() {
  const collapseItems = [
    "Home",
    "Courses",
    "Mentors",
    "About Us"
  ];
  const router = useRouter();

  return (
      <Navbar isBordered variant="floating" css={{margin: '0% auto'}}>
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          {/* logo */}
          <img src="/assets/TLOGO.png" alt="LOGO-img" width={130} height={60} />
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="primary"
          hideIn="xs"
          variant="underline-rounded"
        >
          <Navbar.Link isActive href="/">Home</Navbar.Link>
          <Navbar.Link  href="#courses" >
            Courses
          </Navbar.Link>
          <Navbar.Link href="#mentors_section">Mentors</Navbar.Link>
          <Navbar.Link href="#aboutUs_section">About us</Navbar.Link>
        </Navbar.Content>

        {/* Sign in / up */}
        <Navbar.Content >
          <LoginModal/>
          <SignupModal/>
        </Navbar.Content>
        {/* avatar of logged in */}
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="primary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>

        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="primary"
             
              isActive={index === 0}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="/"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
  );
}