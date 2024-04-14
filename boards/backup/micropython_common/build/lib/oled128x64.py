"""
OLED Displays

Micropython library for the SSD1106_I2C OLED Displays
=======================================================

#Preliminary composition                    20230412

dahanzimin From the Mixly Team
"""
from ssd1106 import SSD1106_I2C

class OLED(SSD1106_I2C):
    """A single matrix."""
    def __init__(self, i2c, width=128, height=64,  address=0x3c, font_address=0x700000):
        super().__init__(width, height, i2c, address)
        self.font(font_address)
