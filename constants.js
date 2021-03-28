export const STARTX                         = 10;
export const STARTY                         = 10;
export const DOCUMENT_WIDTH                 = 612
export const DOCUMENT_HEIGHT                = 792
export const UNITS                          = 'pt'

export const LEFT_PANEL_XPOS                = 0;
export const LEFT_PANEL_YPOS                = 0;
export const LEFT_PANEL_PERCENTAGE          = .3;
export const LEFT_PANEL_WIDTH               = LEFT_PANEL_PERCENTAGE * DOCUMENT_WIDTH;
export const LEFT_PANEL_COLOR               = 'black';

export const RIGHT_PANEL_XPOS               = LEFT_PANEL_WIDTH;
export const RIGHT_PANEL_YPOS               = 0;
export const RIGHT_PANEL_COLOR              = 'gray';
export const RIGHT_PANEL_PERCENTAGE         = 1 - LEFT_PANEL_PERCENTAGE;
export const RIGHT_PANEL_WIDTH              = RIGHT_PANEL_PERCENTAGE * DOCUMENT_WIDTH;

export const NAME_SIZE                      = 16;
export const NAME_WEIGHT                    = 400;
export const NAME_COLOR                     = 'white';
export const NAME_XPOS                      = STARTX;
export const NAME_YPOS                      = STARTY;
export const NAME_YPOS_MIDDLE               = NAME_YPOS + (NAME_SIZE/2);

export const ADDRESS_SIZE                   = 12;
export const ADDRESS_WEIGHT                 = 400;
export const ADDRESS_COLOR                  = 'white';
export const ADDRESS_LINE_SPACING           = 3;
export const ADDRESS_XPOS                   = STARTX;
export const ADDRESS_YPOS                   = STARTY + NAME_SIZE;
export const ADDRESS_YPOS_MIDDLE            = ADDRESS_YPOS + ( ADDRESS_SIZE / 2);

export const VERTICAL_DIVIDER_STROKE_WIDTH  = 2;
export const VERTICAL_DIVIDER_XPOS          = LEFT_PANEL_WIDTH;
export const VERTICAL_DIVIDER_YPOS          = 0;
export const VERTICAL_DIVIDER_HEIGHT        = DOCUMENT_HEIGHT;
export const VERTICAL_DIVIDER_COLOR         = 'red';
