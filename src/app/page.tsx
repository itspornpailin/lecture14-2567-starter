"use client";

import { Button, TextInput, Title, Group, Container, Select, Radio, Checkbox, Text, Modal, Anchor, Space } from "@mantine/core";
import { runningPlans } from "@components/libs/runningPlans";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

export default function Home() {
  const [opened, {open, close}] = useDisclosure(false);
  const [termAccepted, setTermAccepted] = useState(false);

  return (
    <Container size="500px">
      <Title fs="italic" ta="center">Register CMU Marathon</Title>

      <Group grow>
        <TextInput
        label="First Name" placeholder="Input First Name" required
        />

        <TextInput
        label="Last Name" placeholder="Input Last Name" required
        />
      </Group>

      <Space h="lg"/>

      <Select
        label="Plan:"
        data={runningPlans}
        placeholder="Select Running Plan"
        searchable={true}
        required
      />

      <Space h="lg"/>

      <Radio.Group 
      label="Gender"
      >
        <Radio
          mt="sm"
          labelPosition="right"
          value="male"
          label="Male"
          color="indigo"
        />

        <Radio
          mt="sm"
          labelPosition="right"
          value="female"
          label="Female" 
          color="indigo"
        />
      </Radio.Group>

      <Space h="lg"/>

      <Group>
        <Checkbox 
          checked={termAccepted} 
          onChange={(event) => setTermAccepted(event.target.checked)}
        />
        <Text>I accept <Anchor onClick={open}>terms and conditions</Anchor></Text>
      </Group>

      <Modal opened={opened} onClose={close} title="Terms and conditions">
        <Text>
          1. Eligibility: Participants must be at least 18 years old or have parental consent if under 18. <br/>
          2. Registration: Fees are non-refundable and non-transferable. Register by the deadline. <br/>
          3. Health: Ensure you're fit to participate. The event is at your own risk. <br/>
          4. Conduct: Maintain respectful behavior. Disruptive conduct may lead to disqualification. <br/>
          5. Changes/Cancellations: The event may be modified or canceled due to unforeseen circumstances. No refunds. <br/>
          6. Liability: The organizers are not responsible for any injury or loss. <br/>
          7. Data & Media: Personal data may be used for event purposes. You consent to being photographed for promotional use.<br/>
          8. Rules: Follow all event rules. Non-compliance may result in disqualification.<br/>
          By registering, you agree to these terms.
        </Text>
        <br/>
        <Button onClick={close}>Confirm</Button>
      </Modal>

      <Group grow>
      {<Button disabled={!termAccepted} mt="sm" onClick={open}>Register</Button>}
      </Group>
    </Container>
  );
}
