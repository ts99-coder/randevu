"use client";

import { Box, Paper, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box className="w-full flex flex-col h-full overflow-y-auto">
      <Box className="mb-6 h-[10%]">
        <Box className="text-2xl font-bold mb-2">Duyurular</Box>
        <Box className="text-sm ">Önemli duyuru ve güncellemeler</Box>
      </Box>
      <Paper className="h-[3%] flex items-end justify-center">
        <Typography variant="caption">
          Copyright © 2020 AGEM - ÜRÜN ADI. Her hakkı saklıdır. AGEM Bilişim
          Hizmetleri Ltd. Şti.
        </Typography>
      </Paper>
    </Box>
  );
}
