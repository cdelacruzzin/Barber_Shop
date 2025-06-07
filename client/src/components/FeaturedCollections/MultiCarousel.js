import React, {useState} from 'react';
import {Box} from "@mui/system";
import {Button, Paper} from "@mui/material";


export default function MultiCarousel({ products }) {
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

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
            <Box flexGrow={1}>

                <Button onClick={prev} disabled={startIndex === 0}>
                    <Paper>Item 1</Paper>
                </Button>
            </Box>
            <Box display="flex" overflow="hidden" mx="auto" width="100%">
                <Box
                    display="flex"
                    transition="transform 0.5s ease"
                    sx={{
                        transform: `translateX(-${startIndex * (100 / itemsPerSlide)}%)`,
                        width: `${(100 / itemsPerSlide) * total}%`,
                    }}
                >
                    {entries.map(([key, value]) => (
                        <Box
                            key={key}
                            flex={`0 0 ${100 / itemsPerSlide}%`}  // ✅ Instead of 100 / total
                            maxWidth={`${100 / itemsPerSlide}%`}  // ✅ Prevents overflow
                            p={1}
                            boxSizing="border-box"
                        >

                        <img src={value} alt={`product-${key}`} style={{ width: "100%" }} />
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box flexGrow={1}>

                <Button onClick={next} disabled={startIndex + itemsPerSlide >= total}>
                    <Paper>Item 1</Paper>
                </Button>
            </Box>
        </Box>
    );
}