import { Box, Container, Divider, Grid, HStack, Text } from '@chakra-ui/react';
import React from 'react';

import { FooterLink } from './FooterLink';
import { FooterSection } from './FooterSection';
import Logo from '../../assets/logo.svg';

export const Footer = () => (
    <Box backgroundColor="gray.50" as="footer">
        <Divider />
        <Container paddingY="6" maxWidth="container.lg">
            <Grid templateColumns={['1fr', null, 'repeat(4, 1fr)']}>
                <FooterSection heading="Resources">
                    {/* TODO */}
                    <FooterLink href="" label="Docs" />
                    {/* TODO */}
                    <FooterLink href="" label="Configurator" />
                    {/* TODO */}
                    <FooterLink href="" label="Contribute" />
                </FooterSection>
            </Grid>
            <Divider marginY="5" />
            <HStack>
                <Logo color="var(--chakra-colors-gray-400)" height={52} />
                <Text color="gray.600">Shell. Copyright © 2022</Text>
            </HStack>
        </Container>
    </Box>
);
