import React, {useState} from 'react';
import {Box} from "@mui/system";
import {Button, Paper} from "@mui/material";
import {useMediaQuery} from '@mui/material';
import {useTheme} from '@mui/material/styles';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function MultiCarousel({products}) {
    const entries = Object.entries(products || {});
    const total = entries.length;
    const itemsPerSlide = 4;
    const [startIndex, setStartIndex] = useState(0);

    const next = () => {
        if (startIndex + itemsPerSlide < total) {
            setStartIndex(startIndex + itemsPerSlide);
        }
    };

    const prev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - itemsPerSlide);
        }
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
            {!isMobile ? (
                <>
                    <Box flexGrow={1}>
                        <Button onClick={prev} disabled={startIndex === 0}>
                            <ArrowBackIosNewIcon style={{backgroundColor: theme.palette.background.paper, borderRadius: 20, fontSize: 40, border: '1px solid'}}/>
                        </Button>
                    </Box>

                    <Box display="flex" overflow="hidden" mx="auto" width="100%">
                        <Box
                            display="flex"
                            sx={{
                                transition: 'transform .5s ease-in-out',
                                transform: `translateX(-${startIndex * (100 / itemsPerSlide)}%)`,
                                width: `${(100 / itemsPerSlide) * total}%`
                            }}
                        >
                            {Object.entries(products).map(([key, value]) => (
                                <Box
                                    key={key}
                                    flex={`0 0 ${100 / itemsPerSlide}%`}
                                    maxWidth={`${100 / itemsPerSlide}%`}
                                    px={1}
                                    boxSizing="border-box"
                                >
                                    <img src={value} alt={`product-${key}`} style={{ width: '100%' }} />
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    <Box flexGrow={1} >
                        <Button onClick={next} disabled={startIndex + itemsPerSlide >= total} >
                            <ArrowForwardIosIcon style={{backgroundColor: theme.palette.background.paper, borderRadius: 20, fontSize: 40, border: '1px solid'}}/>
                        </Button>
                    </Box>
                </>
            ) : (
                // Mobile grid layout
                <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
                    {Object.entries(products).map(([key, value]) => (
                        <Box key={key}>
                            <img
                                src={value}
                                alt={`product-${key}`}
                                style={{ width: '100%', display: 'block' }}
                            />
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
}