import { Box, IconButton } from '@chakra-ui/react';
import { AddIcon, CalendarIcon, EmailIcon, ChatIcon } from '@chakra-ui/icons';

function SidePanel() {
  return (
    <Box
    position="fixed"
    top="0"
    bottom="0"
    left="0"
    bg="#333333"
    padding="50px"
    display="flex"
    flexDirection="column"
    alignItems="center"
    width={"150px"}
    justifyContent="center"
    >
      <IconButton
        aria-label="Add"
        icon={<AddIcon />}
        bg="#FF0000"
        borderRadius="full"
        color="white"
        size="lg"
        marginBottom="40px"
      />
      <IconButton
        aria-label="Share"
        icon={<EmailIcon />}
        bg="#333333"
        borderRadius="full"
        color="white"
        size="lg"
        marginBottom="40px"
      />
      <IconButton
        aria-label="People"
        icon={<ChatIcon />}
        bg="#333333"
        borderRadius="full"
        color="white"
        size="lg"
        marginBottom="40px"
      />
      <IconButton
        aria-label="Calendar"
        icon={<CalendarIcon />}
        bg="#333333"
        borderRadius="full"
        color="white"
        size="lg"
      />
    </Box>
  );
}

export default SidePanel;
